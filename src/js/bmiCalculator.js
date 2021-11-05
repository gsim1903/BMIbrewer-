class bmiCalculator {
    calculateMetric (options) {
        const weight = options.weight
        const height = options.height
        const bmiValue = (weight / (height * height)).toFixed(2)
        const bmiResults = {
            value: parseFloat(bmiValue),
            classifcation: this.getbmiClassifcation(parseFloat(bmiValue))
        }
        return bmiResults 
    }

    getbmiClassifcation (value) {
       // return 'Obesity 1'
       if (value <18.5) {
           return 'Underweight'

        } else if (value < 24.99) {
        return 'Normal weight'

        } else if (value<29.9) {
            return 'Overweight'

        } else if (value<34.99) {
            return 'Obesity Class 1'

        } else if (value<39.9) {
            return 'Obesity Class 2'

        } else {
         return 'Extream Obesity Class 3'
        }
    }

}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = bmiCalculator
  }