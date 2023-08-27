// RGB To Hex Conversion

// Task:

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):

// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"


// My solution:

function rgb(r, g, b){
    return [r,g,b].reduce((hex,val) => {
      if (val < 0) hex += '00'
      if (val > 255) hex += 'FF'
      else {
        const nums = [Math.floor(val / 16), val % 16]
        nums.forEach(num => {
          if (num >= 0 && num <= 9) hex += num
          if (num > 9) hex += String.fromCharCode(num + 55)
        })
      }
      return hex
    },'')
}