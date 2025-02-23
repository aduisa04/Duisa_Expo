import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [inputs, setInputs] = useState([{ num: '' }, { num: '' }]);
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    const numbers = inputs.map(input => parseFloat(input.num));
    if (numbers.some(num => isNaN(num))) return;

    let res;
    switch (operation) {
      case '+': res = numbers.reduce((acc, curr) => acc + curr, 0); break;
      case '-': res = numbers.reduce((acc, curr) => acc - curr); break;
      case '*': res = numbers.reduce((acc, curr) => acc * curr, 1); break;
      case '/': res = numbers.includes(0) ? 'Cannot divide by zero' : numbers.reduce((acc, curr) => acc / curr); break;
      default: return;
    }
    setResult(res);
  };

  const handleAddInput = () => setInputs([...inputs, { num: '' }]);

  const handleChange = (text, index) => {
    const newInputs = [...inputs];
    newInputs[index].num = text;
    setInputs(newInputs);
  };

  return (
    <View style={styles.calculatorWrapper}>
      <Text style={styles.heading}>Calculator</Text>
      
      {/* Result Display */}
      <View style={styles.displayContainer}>
        <Text style={styles.resultText}>
          {result !== null ? result : '0'}
        </Text>
      </View>

      <View style={styles.calculatorContent}>
        <TouchableOpacity 
          style={[styles.button, styles.addButton]}
          onPress={handleAddInput}
        >
          <Text style={styles.buttonText}>Add Input</Text>
        </TouchableOpacity>
        
        {inputs.map((input, index) => (
          <TextInput
            key={index}
            style={styles.input}
            keyboardType="numeric"
            value={input.num}
            onChangeText={(text) => handleChange(text, index)}
            placeholder={`Number ${index + 1}`}
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          />
        ))}
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleCalculation('+')}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleCalculation('-')}
          >
            <Text style={styles.buttonText}>−</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleCalculation('*')}
          >
            <Text style={styles.buttonText}>×</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleCalculation('/')}
          >
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calculatorWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 15,
    width: '100%',
    maxWidth: 280,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  displayContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    width: '90%',
    minHeight: 60,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 4,
  },
  resultText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    fontFamily: 'monospace', // For that calculator-like number display
  },
  calculatorContent: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    textAlign: 'center',
    margin: 5,
    color: '#fff',
    fontSize: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
  },
  button: {
    height: 40,
    minWidth: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  addButton: {
    backgroundColor: 'rgba(52, 152, 219, 0.8)', // Blue
    paddingHorizontal: 15,
    marginBottom: 10,
    width: '90%',
  },
  operatorButton: {
    backgroundColor: 'rgba(46, 204, 113, 0.8)', // Green
    flex: 1,
    maxWidth: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

export default Calculator;
