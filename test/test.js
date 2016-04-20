const expect = require('chai').expect;
const romanize = require("./../index.js");


describe('Test romanization', () => {
   
    describe('Cyrillic text', () => {

        it('should romanize russion', () => {
            expect(romanize("Хоккей")).to.equal("Hokkey");
        });

    });

    describe('Kazakh text', () => {

        it('should romanize kazakh', () => {
            expect(romanize("Сіз қазақ тілін әлбетте таңдап қойдыңыз")).to.equal("Siz qazaq tilin a'lbette tanhdap qoydynhyz");
        });

    });
    
});