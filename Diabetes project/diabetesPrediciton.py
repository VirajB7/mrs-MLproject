import numpy as np
import pickle
import streamlit as st

#Loading the saved model
loaded_model=pickle.load(open('trained_model.sav','rb'))

#creating a function for prediction

def diabetes_prediction(input_data):
    # changing the input data to numpy array
    input_data_as_numpy_array = np.asarray(input_data)

    # reshape the array as we are predicting for one instance
    # it expects 768 data points so we need to reshape it
    # as we are only giving one instance

    input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

    prediction = loaded_model.predict(input_data_reshaped)
    print(prediction)

    if (prediction[0] == 0):
        return "The person is not diabetic"
    else:
        return "The person is diabetic"

def main():
    #Giving title
    st.title("Diabetes Prediction")

    # getting the input data from the user

    Pregnancies=st.text_input('Number of Pregnancies')
    Glucose=st.text_input('Glucose Level')
    BloodPressure=st.text_input('Blood Pressure value')
    SkinThickness = st.text_input('SkinThickness')
    Insulin = st.text_input('Insulin value')
    BMI = st.text_input('BMI value')
    DiabetesPedigreeFunction = st.text_input('DiabetesPedigreeFunction value')
    Age = st.text_input('Age of the person')

    #code for Prediction
    diagnosis=''

    if st.button('Diagnosis Test Result'):
        diagnosis=diabetes_prediction([Pregnancies,Glucose, BloodPressure,SkinThickness,Insulin ,BMI,DiabetesPedigreeFunction,Age])

    st.success(diagnosis)

if __name__=='__main__':
    main()