console.meow = (meow, l = meow.toString().length / 1.66) => {
    console.log(`
          /‾${`‾‾`.repeat(l)}‾
    🐱  < `, meow, `
          \\_${`__`.repeat(l)}_
    `);
};
