NroAnterior=4;
NroActual=5;

test('string with a single number should result in the number itself',()=>{
    expect (NroActual).toBeGreaterThanOrEqual(1);
    expect (NroActual).toBeLessThanOrEqual(10);
    expect (NroActual).toBe(NroAnterior + 1);
});