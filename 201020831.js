module.exports = {
    imc_sistInter: function (weight, height) {
        return weight / Math.pow(height, 2)
    },
    imc_sistIngles: function (weight, height) {
        return (weight / Math.pow(height, 2)) * 703
    },
    weightLevel: function (imc) {
        if (imc < 18.5) return 'Bajo'
        if (imc < 24.9) return 'Normal'
        if (imc < 29.9) return 'Sobrepeso'
        return 'Sobrepeso'
    },
    getForce: function (mass, accelerate) {
        return mass / accelerate;
    },
    getGravitionalForce: function (mass1, mass2, radio) {
        let G = 6.673 * Math.pow(10, -11)
        return G * (mass1 * mass2) / Math.pow(radio, 2)
    }
}