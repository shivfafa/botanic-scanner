from fastapi import FastAPI, UploadFile, File
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS
origins = [
    "http://localhost",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React default
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load all the models and class names for different crops
MODELS = {
    'corn': {
        'model': tf.keras.models.load_model("../saved_models/corn_model.h5", compile=False),
        'class_names': ['corn_blight', 'corn_common_rust', 'corn_gray_leaf_spot', 'corn_healthy']
    },
    'cotton': {
        'model': tf.keras.models.load_model("../saved_models/cotton_model.h5", compile=False),
        'class_names': ['Cotton_Aphids', 'Cotton_Army_Worm', 'Cotton_Bacterial_Blight', 'Cotton_Healthy', 'Cotton_Powdery_Meldy', 'Cotton_Target_Spot']
    },
    'rice': {
        'model': tf.keras.models.load_model("../saved_models/rice_model.h5", compile=False),
        'class_names': ['Rice_Bacterial_Leaf_Blight', 'Rice_Brown_Spot', 'Rice_Healthy', 'Rice_Hispa', 'Rice_Leaf_Blast', 'Rice_Tungro']
    },
    'sugarcane': {
        'model': tf.keras.models.load_model("../saved_models/sugarcane_model.h5", compile=False),
        'class_names': ['Sugarcane_Bacterial_Blight', 'Sugarcane_Healthy', 'Sugarcane_Red_Rot', 'Sugarcane_Red_Rust']
    },
    'wheat': {
        'model': tf.keras.models.load_model("../saved_models/wheat_model.h5", compile=False),
        'class_names': ['Wheat_Brown_Rust', 'Wheat_Healthy', 'Wheat_Septoria', 'Wheat_Yellow_Rust']
    }
}


@app.get("/")
async def ping():
    return "Welcome to The Botanic Scanner"


def read_file_as_image(data) -> np.ndarray:
    image = Image.open(BytesIO(data))
    image = image.resize((224, 224))
    return image


@app.post("/predict/corn")
async def predict_corn(
        file: UploadFile = File(...),
):
    return await predict('corn', file)


@app.post("/predict/cotton")
async def predict_cotton(
        file: UploadFile = File(...),
):
    return await predict('cotton', file)


@app.post("/predict/rice")
async def predict_rice(
        file: UploadFile = File(...),
):
    return await predict('rice', file)


@app.post("/predict/sugarcane")
async def predict_sugarcane(
        file: UploadFile = File(...),
):
    return await predict('sugarcane', file)

 
@app.post("/predict/wheat")
async def predict_wheat(
        file: UploadFile = File(...),
):
    return await predict('wheat', file)

# async def predict(crop_type: str, file: UploadFile) -> dict:
#     if crop_type not in MODELS:
#         return {"error": "Invalid crop type"}
#
#     image = re
#     ad_file_as_image(await file.read())
#     img_batch = np.expand_dims(image, 0)
#     model = MODELS[crop_type]['model']
#     class_names = MODELS[crop_type]['class_names']
#     predictions = model.predict(img_batch)
#     predicted_class = class_names[np.argmax(predictions)]
#     confidence = np.max(predictions[0])
#
#     return {
#         "class": predicted_class,
#         "confidence": float(confidence)
# }
async def predict(crop_type: str, file: UploadFile) -> dict:
    if crop_type not in MODELS:
        return {"error": "Invalid crop type"}
    print(f"[DEBUG] Received image for crop: {crop_type}, filename: {file.filename}")
    image = read_file_as_image(await file.read())  # Fix the typo here
    img_batch = np.expand_dims(image, 0)
    model = MODELS[crop_type]['model']
    class_names = MODELS[crop_type]['class_names']
    predictions = model.predict(img_batch)
    predicted_class = class_names[np.argmax(predictions)]
    confidence = float(np.max(predictions[0]))  # Convert to float
    print("\n","-"*100)
    print( f"class: {predicted_class},confidence: {confidence}")
    print("\n","-"*100)

    return {
        "class": predicted_class,
        "confidence": confidence
    }

if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=8080)

