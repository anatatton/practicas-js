NroRuleta =  Math.floor(Math.random()*(37-0)+0);

test('string with a single number should result in the number itself',()=>{
    expect (NroRuleta).toBeGreaterThanOrEqual(0);
    expect (NroRuleta).toBeLessThanOrEqual(37);
});