// CreateLeague.tsx

import React from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LeagueSchema = Yup.object().shape({
  leagueName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  numOfTeams: Yup.number()
    .required('Required')
    .positive()
    .integer(),
  numOfDivisions: Yup.number()
    .required('Required')
    .positive()
    .integer(),
});

const CreateLeague = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ leagueName: '', numOfTeams: '', numOfDivisions: '' }}
        validationSchema={LeagueSchema}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('leagueName')}
              onBlur={handleBlur('leagueName')}
              value={values.leagueName}
              placeholder="League Name"
            />
            {errors.leagueName && touched.leagueName ? (
              <Text style={styles.errorText}>{errors.leagueName}</Text>
            ) : null}
            <TextInput
              style={styles.input}
              onChangeText={handleChange('numOfTeams')}
              onBlur={handleBlur('numOfTeams')}
              value={values.numOfTeams}
              placeholder="Number of Teams"
              keyboardType="numeric"
            />
            {errors.numOfTeams && touched.numOfTeams ? (
              <Text style={styles.errorText}>{errors.numOfTeams}</Text>
            ) : null}
            <TextInput
              style={styles.input}
              onChangeText={handleChange('numOfDivisions')}
              onBlur={handleBlur('numOfDivisions')}
              value={values.numOfDivisions}
              placeholder="Number of Divisions"
              keyboardType="numeric"
            />
            {errors.numOfDivisions && touched.numOfDivisions ? (
              <Text style={styles.errorText}>{errors.numOfDivisions}</Text>
            ) : null}
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  errorText: {
    color: 'red',
  },
});

export default CreateLeague;

