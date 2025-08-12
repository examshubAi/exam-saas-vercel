import firebase_admin
from firebase_admin import credentials, firestore, storage
import json
import os

def initialize_firebase():
    if not firebase_admin._apps:
        cred = credentials.Certificate(json.loads(os.environ["FIREBASE_SERVICE_ACCOUNT"]))
        firebase_admin.initialize_app(cred, {
            'storageBucket': os.environ["FIREBASE_STORAGE_BUCKET"]
        })
    
    return firestore.client(), storage.bucket()

def generate_download_url(paper_id):
    db, bucket = initialize_firebase()
    doc_ref = db.collection("papers").document(paper_id)
    paper = doc_ref.get().to_dict()
    
    if not paper:
        return None
        
    blob = bucket.blob(f"papers/{paper['file_name']}")
    url = blob.generate_signed_url(
        expiration=datetime.timedelta(minutes=15),
        version="v4"
    )
    return url
