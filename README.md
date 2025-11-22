# 🏡 Bangalore House Price Prediction (Flask + ML + Web UI)

This project predicts house prices in Bangalore based on features such as location, area (sq.ft), number of bedrooms, and bathrooms. It uses a machine learning model trained on real housing data and provides predictions through a fully interactive *web-based UI* built using Flask, HTML, CSS, and JavaScript.

The goal is to help users estimate property prices instantly and visually using a simple web form rather than running scripts manually.

---

## 🌐 Web Application Features

- 🚀 Real-time price prediction via web UI
- 📍 Location-based price variation
- 🧹 Cleaned and preprocessed dataset
- 📊 Machine learning regression model
- 🎨 Frontend built using HTML, CSS, JavaScript
- ⚙ Backend API built using Flask
- 💾 Model stored using pickle

---

## 🧠 Machine Learning Workflow

| Stage | Technique |
|--------|----------|
| Data Cleaning | Remove missing values & outliers |
| Feature Engineering | One-hot encoding, feature scaling |
| Model | Linear Regression (or chosen model) |
| Storage | Model saved as .pkl |
| Evaluation | R² Score, Train/Test Split |

## ⚙ How to Run Locally

```bash
git clonehttps://github.com/Ashadikram/House_Price_Prediction
cd Bangalore-House-Price-Prediction
pip install -r requirements.txt
python app.py

## Then open your browser and go to
http://127.0.0.1:5500/BHP/New%20folder/Client/app.html

Future Enhancements
🏗 Deploy to cloud (Render / Railway / AWS / Heroku)
📱 Mobile responsive UI
📊 Add dynamic graphs & location statistics
🔍 Add rental price prediction
🤖 Use advanced models (XGBoost, Random Forest)


👨‍💻 Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Flask (Python)
Machine Learning: Pandas, NumPy, Scikit-Learn
Model Storage: Pickle
