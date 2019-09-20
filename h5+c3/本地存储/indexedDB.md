# [indexedDB入门](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB)

## 总结

```javascript
// 打开数据库(该库不存在就创建),name数据库名,version版本号(只能升不能降),request返回结果对象,会生成处理函数
var request = indexedDB.open(name: string, version: number);

// 错误处理
request.onerror = function(event) {
  console.log(event.target.errorCode);
};

// 新创建数据库或version版本号更新触发
request.onupgradeneeded = function(event) {
  // 保存IDBDataBase接口
  var db = event.target.result;

  // 为数据库创建一个对象仓库 name: 仓库名(表名), keyPath: 传入的数据必须带有该key(键值),即表的列名
  var objectStore = db.createObjectStore(name: string, { keyPath: string });
  
  // 为对象仓库创建索引, 通过该索引搜索对象仓库（表）的相关信息
  objectStore.createIndex(name: string, keyPath: string, { unique: boolean });

  // 使用事务的 oncomplete 事件确保在插入数据前对象仓库已经创建完毕
  objectStore.transaction.oncomplete = function(event) {

    // 我们的客户数据看起来像这样。
    const customerData = [
      { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
      { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
    ];

    // 将数据保存到新创建的对象仓库
    /*
      db.transaction(["customers"], "readwrite") , readonly 仅读, 需要加入数据必须
    */
    var customerObjectStore = db.transaction(["customers"], "readwrite").objectStore("customers"); // 修改该表读写权限
    customerData.forEach(function(customer) {
      customerObjectStore.add(customer);
    });
  };
}

// onupgradeneeded完成后触发(若未触发ongradeneeded，直接触发success)
request.onsuccess = function(event) {

}

```

## [打开数据库](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB#%E6%89%93%E5%BC%80%E6%95%B0%E6%8D%AE%E5%BA%93)

### var request = indexedDB.open(name: string, version?: number): 打开数据库(该库不存在就创建),name数据库名,version版本号(只能升不能降),request返回结果对象,会生成处理函数

#### request

- **request.onsuccess** = function (event) {db = event.target.result;} : 成功时触发, event数据库操作事件

- **request.onerror** = function (event) {console.log("Database error: " + event.target.errorCode);} : 失败时触发

```javascript
// 打开数据库
var request = indexedDB.open('test', 1);

// 生成处理函数
// 成功
var db;
request.onsuccess = function (event) {
  db = event.target.result;
  console.log('成功');
}

// 错误处理
request.onerror = function (event) {
  console.log("Database error: " + event.target.errorCode);
}
```

#### event

## [创建和更新数据库版本号](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB#%E5%88%9B%E5%BB%BA%E5%92%8C%E6%9B%B4%E6%96%B0%E6%95%B0%E6%8D%AE%E5%BA%93%E7%89%88%E6%9C%AC%E5%8F%B7)

当你创建一个新的数据库或者增加已存在的数据库的版本号（当打开数据库时，指定一个比之前更大的版本号）， onupgradeneeded 事件会被触发，IDBVersionChangeEvent 对象会作为参数传递给绑定在 request.result（例如例子中的 db）上的 onversionchange 事件处理函数，你应该在此创建该版本需要的对象仓库（object store）

- **request.onupgradeneeded**: 要更新数据库的 schema，也就是创建或者删除对象存储空间，需要实现 onupgradeneeded 处理程序，这个处理程序将会作为一个允许你处理对象存储空间的 versionchange 事务的一部分被调用

```javascript
// 该事件仅在较新的浏览器中实现了
request.onupgradeneeded = function(event) {
  // 保存 IDBDataBase 接口
  var db = event.target.result;

  // 为该数据库创建一个对象仓库
  var objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

如果 onupgradeneeded 事件成功执行完成，打开数据库请求的 onsuccess 处理函数会被触发

```javascript
// 我们的客户数据看起来像这样。
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
];

const dbName = "the_name";

var request = indexedDB.open(dbName, 2);

request.onerror = function(event) {
  // 错误处理
};
request.onupgradeneeded = function(event) {
  var db = event.target.result;

  // 建立一个对象仓库来存储我们客户的相关信息，我们选择 ssn 作为键路径（key path）
  // 因为 ssn 可以保证是不重复的
  var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

  // 建立一个索引来通过姓名来搜索客户。名字可能会重复，所以我们不能使用 unique 索引
  objectStore.createIndex("name", "name", { unique: false });

  // 使用邮箱建立索引，我们向确保客户的邮箱不会重复，所以我们使用 unique 索引
  objectStore.createIndex("email", "email", { unique: true });

  // 使用事务的 oncomplete 事件确保在插入数据前对象仓库已经创建完毕
  objectStore.transaction.oncomplete = function(event) {
    // 将数据保存到新创建的对象仓库
    var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
    customerData.forEach(function(customer) {
      customerObjectStore.add(customer);
    });
  };
};
```
