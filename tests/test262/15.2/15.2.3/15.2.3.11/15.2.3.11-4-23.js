  function testcase() 
  {
    var b = Object.isSealed(ReferenceError);
    if (b === false)
    {
      return true;
    }
  }
  {
    var __result1 = testcase();
    var __expect1 = true;
  }
  