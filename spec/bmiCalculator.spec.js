const bmiCalculator = require('../src/js/bmiCalculator')

subject = new bmiCalculator();

describe('bmiCalculator', () => {
    describe('#calculateMetric', () => {
        describe ('Simmie',() => {
            let results 
            beforeEach(() => { 
                results = subject.calculateMetric({ height: 1.88, weight: 85})
            })  
            it('is expected to return a numerical (float with 2 decimal places) value given proper arguments',() => {
                expect(results.value).toEqual(24.05)
            })
            
            it('is expected to return a classifcation of "Normal Weight"',() => {
                expect(results.classifcation).toEqual('Normal weight')
            })
        })
        
        describe ('Captain Kirk',() => {
            let results 
            beforeEach(() => { 
                results = subject.calculateMetric({ height: 2.05, weight: 215})
            })  
            it('is expected to return a numerical (float with 2 decimal places) value given proper arguments',() => {
                expect(results.value).toEqual(51.16)
            })
            
            it('is expected to return a classifcation of "Extreme"',() => {
                expect(results.classifcation).toEqual('Extream Obesity Class 3')
            })

        

        describe ('Hulk Hogan',() => {
            let results 
            beforeEach(() => { 
                results = subject.calculateMetric({ height: 2.05, weight: 115})
            })  
            it('is expected to return a numerical (float with 2 decimal places) value given proper arguments',() => {
                expect(results.value).toEqual(27.36)
            })
            
            it('is expected to return a classifcation of "Overweight"',() => {
                expect(results.classifcation).toEqual('Overweight')
            })
        })

        describe ('Greta',() => {
            let results 
            beforeEach(() => { 
                results = subject.calculateMetric({ height: 1.75, weight: 45})
            })  
            it('is expected to return a numerical (float with 2 decimal places) value given proper arguments',() => {
                expect(results.value).toEqual(14.69)
            })
            
            it('is expected to return a classifcation of "Underweight"',() => {
                expect(results.classifcation).toEqual('Underweight')
            })
        })      
    })
})})
