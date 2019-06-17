/**
 * BUILDING FRAMEWORKS
 *
 * Build Greetr library.
 *
 * Requirements:
 * - When given a firstname, lastname and optional language, it generates formal and informal greetings.
 * - Support Eng and spanish languages.
 * - Reusable library/framework.
 * - Easy to type 'G$()' structure.
 * - Support jQuery.
 */


// Avoid global variables collisions.
(function(global, $) {

    /**
     * Returns function constructor to create a new object internally every time the library is called.
     */
    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    };

    /**
     * Private members - not accessible from outside.
     */

    // supported languages
    var supportedLangs = ['en', 'es'];

    // informal greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    // format greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMsgs = {
        en: 'Logged in: ',
        es: 'Inicio sesión: '
    };


    // Use prototype property to handle public members.
    Greetr.prototype = {

        getMessage: function(formal) {
            return formal ? this.formalGreeting() : this.informalGreeting();
        },

        getFullName: function() {
            return this.firstname + ' ' + this.lastname;
        },

        validate: function() {
            if(supportedLangs.indexOf(this.language) === -1) {
                throw 'Unsupported language!';
            }
        },

        informalGreeting: function() {
            return greetings[this.language] + ' ' + this.firstname;
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.getFullName();
        },

        log: function () {
            if (console) {
                console.log(logMsgs[this.language] + this.getFullName());
            }
            return this;
        },

        greet: function(formal) {
            var msg = getMessage(formal);

            if (console) {
                console.log(msg);
            }

            /**
             * 'this' refers to the calling object at execution time.
             * making the method chainable.
             */
            return this;
        },

        setLanguage: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded!';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            $(selector).text(this.getMessage(formal));

            return this;
        }

    };

    // Function constructor that initializes variables.
    // the actual object is created here, allowing us to create a new object
    // without calling 'new' from outside.
    Greetr.init = function(firstname, lastname, language) {
        var self = this;

        // Set default values
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';


        self.validate();

        // No need to return nothing since the function is used as a constructor object.
        // returns 'this' by default since it is used as a constructor function.
    };

    // Prototype of constructor function should point to public members
    // so we are able to be used by outside.
    // trick borrowed from jQuery so we don't have to used the 'new' keyboard.
    Greetr.init.prototype = Greetr.prototype;

    // Attach Greetr to the global object and add 'G$' as a shortcut.
    global.Greetr = global.G$ = Greetr;

}(window,jQuery));
