function testcase()
{
  if (Object.getPrototypeOf(TypeError) === Function.prototype)
  {
    return true;
  }
}

var __result1 = testcase();
var __expect1 = true;
