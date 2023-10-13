aleatorio = Math.floor(Math.random() * (37*11 - 37*5) + 37*5);

test('string with a single number should result in the number itself',()=>{
    expect (aleatorio).toBeGreaterThanOrEqual(37*5);
    expect (aleatorio).toBeLessThanOrEqual(37*10);
});