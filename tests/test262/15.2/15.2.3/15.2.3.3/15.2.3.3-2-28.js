  function testcase() 
  {
    var obj = {
      "123" : 1
    };
    var desc = Object.getOwnPropertyDescriptor(obj, 123);
    return desc.value === 1;
  }
  {
    var __result1 = testcase();
    var __expect1 = true;
  }
  