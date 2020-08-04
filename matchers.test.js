const { TestScheduler } = require('jest');

test('测试ToBe类似object.is,引用相同', () => {
    //toBe匹配器matchers object.is ===
    const a = { one: 1 };
    expect(a).toBe({ one: 1 });
});

test('测试内容toEqual,内容匹配相同', () => {
    //toEqual匹配器
    const a = { one: 1 };
    expect(a).toEqual({ one: 1 });
});

test('测试对象是否为null', () => {
    //toEqual匹配器
    const a = null;
    expect(a).toBeNull();
});
test('测试对象是否为undefined', () => {
    //toEqual匹配器
    const a = undefined;
    expect(a).toBeUndefined();
});
test('测试用例是否被定义过', () => {
    //toEqual匹配器，null可以通过
    const a = null;
    expect(a).toBeDefined();
});
test('toBeTruthy匹配器', () => {
    //toBeTruthy匹配器
    const a = 1;
    expect(a).toBeTruthy();
});
test('toBeFalsy匹配器', () => {
    //toBeTruthy匹配器
    const a = 0;
    expect(a).toBeFalsy();
});
test('not匹配器', () => {
    //toBeTruthy匹配器
    const a = 1;
    expect(a).not.toBeFalsy();
});
//数字相关
test('toBeGreaterThan', () => {
    //toBeTruthy匹配器
    const count = 10;
    expect(count).toBeGreaterThan(9);
});
test('toBeGreaterThanOrEqual', () => {
    //大于等于
    const count = 10;
    expect(count).toBeGreaterThanOrEqual(10);
});
test('toBeLessThan', () => {
    //toBeTruthy匹配器
    const count = 10;
    expect(count).toBeLessThan(11);
});
test('toBeLessThanOrEqual', () => {
    //toBeTruthy匹配器
    const count = 10;
    expect(count).toBeLessThanOrEqual(10);
});
test('toBeCloseTo', () => {
    //toBeTruthy匹配器
    const firstNumber = 0.1;
    const secondNumber = 0.2;
    expect(firstNumber+secondNumber).toBeCloseTo(0.3);
});
//string
test('toMatch', () => {
    //toMatch（包含） 可以写字符串或者正则表达式
    const str="http://www.baidu.com"    
    expect(str).toMatch('baidu');
});
//Array,set
test('toContain', () => {
    //toMatch（包含） 可以写字符串或者正则表达式
    const arr=['dell','lee','imooc']    
    expect(arr).toContain('dell');
    const set=new Set(arr)
    expect(set).toContain('dell');
});
//异常
const throwNewErrorFunc=()=>{
    throw new Error('this is a new error')
}
test('toThrow',()=>{
    expect(throwNewErrorFunc).toThrow('this is a new error')
})