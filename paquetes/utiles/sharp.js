const sharp = require('sharp')

sharp('./user-icon.png')
    .resize(500)
    .grayscale()
    .toFile('resize.png')