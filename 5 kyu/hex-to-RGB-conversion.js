// RGB To Hex Conversion

// Task:


// When working with color values it can sometimes be useful to extract the individual red, green, 
// and blue (RGB) component values for a color. Implement a function that meets these requirements:

//   -  Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
//   -  Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255

// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

// Example:

// "#FF9933" --> {r: 255, g: 153, b: 51}




// My solution:

function hexStringToRGB(hexString) {
    let rgb = []
        for (let i = 1; i < hexString.length; i += 2) {
            let [first, second] = hexString
                .slice(i, i + 2)
                .toLowerCase()
                .split('')
            first = parseInt(first, 16);
            second = parseInt(second, 16);
            rgb.push((first * 16) + second);
            }
    return {r: rgb[0], g: rgb[1], b: rgb[2]}
}