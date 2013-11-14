describe("A good JavaScript developer", function() {
    it("should knows that block comments breaks in case of regExp", function() {
        var errorWithBlockComments = false;
        var errorWithSingleLineComments = false;
        try {
            eval(
                    "/*" +
                    " var simpleString ewr wqwfgwfqwe= 'doe';" +
                    " var regExp = /a*/;" +
                    "*/"
                    );
        } catch (e) {
            errorWithBlockComments = true;
        }

        try {
            eval(
                    "// var simpleString ewr wqwfgwfqwe= 'doe';" +
                    "// var regExp = /a*/;"
                    );
        } catch (e) {
            errorWithSingleLineComments = true;
        }

        expect(errorWithBlockComments).toBe(true);
        expect(errorWithSingleLineComments).toBe(false);
    });

    it("should know that a number is just a number with no distinction between integer and floats", function() {
        expect(1 === 1.0).toBe(true);
    });

    it("shoud know that can use exponential form to express numbers", function() {
        expect(100 === 1e2);
        expect(100 === 1.0e2);
        expect(120 === 1.2e2);
    });

    it("should know that NaN is the result of an operation with no normal result", function() {
        expect(isNaN(1 * "blabla")).toBe(true);
    });

    it("should know that NaN is not equal to anything", function() {
        expect(NaN === undefined).toBe(false);
        expect(NaN === NaN).toBe(false);
        expect(NaN !== NaN).toBe(true);
    });

    it("should know that NaN is toxyc", function() {
        expect(isNaN(NaN + 1)).toBe(true);
        expect(isNaN(1 + NaN)).toBe(true);
    });

    it("should know that NaN is not a number but... his type is number :)", function() {
        expect(typeof NaN).toBe('number');
    });

    it("should know that every number larger than 1.79769313486231580e+308 is Infinity", function() {
        //Wrong on the book?
        expect(1.79769313486231580e+308).toEqual(1.79769313486231580e+308);
        expect(1.79769313486231581e+308).toEqual(Infinity);
        expect(1.79769313486231582e+308).toEqual(Infinity);
    });

    it("should know that Infinity can be changed in older ecmascript versions... not in node", function() {
        Infinity = 42;
        expect(45).not.toBe(Infinity); // IE anyone?
    });

    it("should know that she can express strings with char codes with \\u", function() {
        expect("\u0041" === "A").toBe(true);
    });

    it("should know that strings have length property", function() {
        expect("seven".length === 5).toBe(true);
    });

    it("should know that strings are immutable but is simple to make a new string wit + operator", function() {
        expect("cat" === "c" + "a" + "t").toBe(true);
    });

    it("should know that strings have methods", function() {
        expect("cat".toUpperCase() === 'CAT').toBe(true);
    });

    it("should know that blocks expressed by curly braces {} does not create a scope", function() {
        var variable = "a";
        {
            variable = "b";
        }
        expect(variable === "b").toBe(true);
    });

    it("should know that the || executes statements till a truthy value and returns it", function() {
        expect((false || NaN || undefined || 0 || null || "" || "truthy") === "truthy").toBe(true);
    });

    it("should know that the && executes statements till a falsy value and returns it", function() {
        expect(isNaN("a" && "b" && "false" && "true" && "0" && NaN && false)).toBe(true);
    });

    it("should know that if statement tests for truthy values", function() {
        if ("false") {
            expect(true).toBe(true);
        } else {
            expect(true).toBe(false);
        }
        if (NaN) {
            expect(false).toBe(true);
        } else {
            expect(true).toBe(true);
        }
        if (0) {
            expect(false).toBe(true);
        } else {
            expect(true).toBe(true);
        }
    });

    it("should know that switch statement check for exact match", function() {
        var exact;
        var variable = "12";
        switch (variable) {
            case 12:
                exact = false;
                break;
            case "12":
                exact = true;
                break;
            default :
                break;
        }

        expect(exact).toBe(true);
    });

    it("should know that switch statement can fall if you don't provide break statement", function() {
        var fall;
        var variable = "12";
        switch (variable) {
            case "12":
                fall = false;
            case "12":
                fall = true;
                break;
            default :
                break;
        }

        expect(fall).toBe(true);
    });

    it("should know that for in statements enumerates object properties (even the prototype chain ones)", function() {
        var key;
        var Cat = function(name) {
            this.name = name;
        };
        Cat.prototype.meow = function() {
            return "meow! I'm" + this.name;
        };
        var cat = new Cat("Fluffy");
        var numberOfProperties = 0;
        for (key in cat) {
            numberOfProperties += 1;
        }
        expect(numberOfProperties).toBe(2);
    });

    it("should know that she can exclude prototype properties using hasOwnProperties", function() {
        var key;
        var Cat = function(name) {
            this.name = name;
        };
        Cat.prototype.meow = function() {
            return "meow! I'm" + this.name;
        };
        var cat = new Cat("Fluffy");
        var numberOfProperties = 0;
        for (key in cat) {
            if (cat.hasOwnProperty(key)) {
                numberOfProperties += 1;
            }
        }
        expect(numberOfProperties).toBe(1);
    });
    
    it("should know that she can break to a labelled loop", function(){
        loop1:
        while (true){
            while(true){
                while(true){
                    break loop1;
                }
            }
        }
        expect(true).toBe(true);
    });
    
    it("should be aware that the compiler adds ; in unexpected ways", function(){
       var hello = function(){
           return //Compiler adds ; here
           "hello world";
       };
       expect(typeof hello() === 'undefined').toBe(true);
    });
    
    it("should know operator precedences and use parenthesys to avoid confusion", function(){
        expect(1 + 2 * 3 - 12 + -2 * 4 * -1).toBe(3);
        expect(false !== true && true ).toBe(true);
        expect(true && false || true ).toBe(true);
    });
    
    it("should know that possible types in javascript are 'number' 'string' 'boolean' 'object' 'function' and 'undefined' and some are wrong", function(){
       expect(typeof []).toBe('object');
       expect(typeof null).toBe('object');
       expect(typeof 1).toBe('number');
       expect(typeof Infinity).toBe('number');
       expect(typeof NaN).toBe('number');
       expect(typeof "").toBe('string');
       expect(typeof false).toBe('boolean');
       expect(typeof Object.prototype.hasOwnProperty).toBe("function");
       expect(typeof undefined).toBe('undefined');
    });
    
    it("should know that a function literal can be anonymous or named, and you can use name for recursion", function(){
        var exit =  false;
        var hello = function salutation (){
            if(exit){ return "hello world";}
            exit = true;
            return salutation();
        };    
        expect(hello()).toBe("hello world");
    });
    
    it("should know that can use || to fill in default values", function(){
       var salutation = {
           italian : "ciao",
           english : "hello"
       };
       
       expect(salutation.italian).toBe("ciao");
       expect(salutation["english"]).toBe("hello");
       expect(salutation.spanish || "not supported").toBe("not supported");
    });
    
    it("should know that can use && to protect from undefined access", function(){
       var salutation = {
           italian : {
               always : "ciao",
               morning : "buona mattina"
           },
           english : {
               always : "hello",
               morning : "good morning"
           }
       };
       
       expect(salutation.italian.always).toBe("ciao");
       expect(salutation["english"]["morning"]).toBe("good morning");
       expect((salutation.spanish && salutation.spanish.morning) || "not supported").toBe("not supported");
    });
});