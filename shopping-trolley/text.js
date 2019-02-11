/**
  extensions is an Array and each item has such format:
  {firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}
  lastName, ext can be empty, extType can only has "DigitalUser", "VirtualUser","FaxUser","Dept","AO".
**/

/**
  Question 1: sort extensions by "firstName" + "lastName" + "ext" ASC
**/
function sortExtensionsByName(extensions) {
  // reserved the type of sort
  let type = String(arguments[1]).toLowerCase() === 'desc' ? 'desc' : 'asc';

	if (Array.isArray(extensions)) {
    extensions.sort(function(a, b) {
      let aStr = a.firstName + (a.lastName || ' ') + (a.ext || ' '),
          bStr = b.firstName + (b.lastName || ' ') + (b.ext || ' ');
      
      return type === 'asc' ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
    });
  } else {
    console.log("error: The first parameter should be Array, e.g., [{firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}]");
  }
}


/**
  Question 2: sort extensions by extType follow these orders ASC
  DigitalUser < VitrualUser < FaxUser < AO < Dept.

  DigitalUser < VirtualUser < FaxUser < AO < Dept.
  (“虚拟用户”单词拼写修正：VitrualUser => VirtualUser;)
**/
function sortExtensionsByExtType(extensions) {
  // reserved the type of sort
  let type = String(arguments[1]).toLowerCase() === 'desc' ? 'desc' : 'asc',
      sortArr = ['Dept', 'AO', 'FaxUser', 'VirtualUser', 'DigitalUser'];
  
  if (Array.isArray(extensions)) {
    extensions.sort(function(a, b) {
      let aNum = sortArr.indexOf(a.extType),
          bNum = sortArr.indexOf(b.extType);
      console.log(aNum, bNum);
      
      return type === 'asc' ? aNum - bNum : bNum - aNum;
    });
  } else {
    console.log("error: The first parameter should be Array, e.g., [{firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}]");
  }
}


/**
  saleItems is an Array has each item has such format:
  {
	month: n, //[1-12],
	date: n, //[1-31],
	transationId: "xxx",
	salePrice: number
  }
**/

/**
  Question 3: write a function to calculate and return a list of total sales (sum) for each quarter, expected result like:
  [
  	{quarter: 1, totalPrices: xxx, transactionNums: n},
  	{....}
  ]
**/

function sumByQuarter(saleItems) {
  // 注意浮点数过限

}

/**
  Question 4: write a function to calculate and return a list of average sales for each quarter, expected result like:
  [
    {quarter: 1, averagePrices: xxx, transactionNums: n},
    {....}
  ]
**/

function averageByQuarter(saleItems) {
  // 注意浮点数精确度
}


/**
  Question 5: please create a tool to generate Sequence
  Expected to be used like:
  var sequence1 = new Sequence();
  sequence1.next() --> return 1;
  sequence1.next() --> return 2;
  
  in another module:
  var sequence2 = new Sequence();
  sequence2.next() --> 3;
  sequence2.next() --> 4;
**/




/**
    Question 6:
    AllKeys: 0-9;
    usedKeys: an array to store all used keys like [2,3,4];
    We want to get an array which contains all the unused keys,in this example it would be: [0,1,5,6,7,8,9]
**/

function getUnUsedKeys(allKeys, usedKeys) {
	//TODO
}





