
![Logo](https://i.imgur.com/twm5sEp.png)


# AlertUser Project
The magic solution to display alert in any project using the least possible code.
 

 ## Installation
1. Download file alert.js. 
2. Add the file to your project.
3. Make sure to add Bootstrap CSS and JS to your code.

 ## How to use?

 1. Before import alert.js.
 ```
<script src="/alert.js"></script>
 ```

2. Make a div with any class name you like here your alert will appears.
```
<div class="alert"></div>
```

3. Use the following function
```
alertUser(color, message, className, bootstrapVersion);
```

#### What do these parameters mean?
 * @param `color` - The color of the alert using bootstrap class color.
 * @param `message` - The message you want to display to the user.
 * @param `className` - The class of the div you want to append the alert to.
 * @param `bootstrapVersion` - This is the version of bootstrap you are using. If you are using bootstrap
 * 5, then you can pass in 5 or "5" as the parameter. If you are using bootstrap 4, then you can pass in 4 or "4" as the parameter
 * in the parameter to use bootstrap 4.
## Demo bootstrap 5

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>alertUser</title>
    <!-- Bootstrap -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"/>
  </head>
  <body>
      <div class="alertUser"></div>

    <!-- JavaScript Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
    ></script>

    <!--import alert.js-->
    <script src="/alert.js"></script>

    <!--Using the code-->
    <script>
      alertUser("primary", "This is an example of an alert", "alertUser", "5");
      alertUser("secondary ", "This is an example of an alert", "alertUser", 5);
      alertUser("success", "This is an example of an alert", "alertUser", 5);
      alertUser("danger", "This is an example of an alert", "alertUser", 5);
      alertUser("info", "This is an example of an alert", "alertUser", 5);
      alertUser("light", "This is an example of an alert", "alertUser", "5");
      alertUser("dark", "This is an example of an alert", "alertUser", 5);
    </script>
  </body>
</html>
```


## Demo bootstrap 4

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>alertUser</title>
    <!-- Bootstrap -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="alertUser"></div>

    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>

    <!--import alert.js-->
    <script src="/alert.js"></script>

    <!--Using the code-->
    <script>
      alertUser("primary", "This is an example of an alert", "alertUser", "4");
      alertUser("secondary ", "This is an example of an alert", "alertUser", 4);
      alertUser("success", "This is an example of an alert", "alertUser", "4");
      alertUser("danger", "This is an example of an alert", "alertUser", 4);
      alertUser("info", "This is an example of an alert", "alertUser", "4");
      alertUser("light", "This is an example of an alert", "alertUser", 4);
      alertUser("dark", "This is an example of an alert", "alertUser", "4");
    </script>
  </body>
</html>
```


## How the code works programmatically?

The function takes in 4 arguments, the color of the alert, the message, the class name of the div
that will contain the alert, and the bootstrap version.
The function then creates a div element, sets the class attribute to the alert class, and sets the
text content to the message.
It then creates a button element, sets the type attribute to button, sets the class attribute to
close, and sets the data-dismiss attribute to alert.
It then creates a span element, sets the aria-hidden attribute to true, and sets the innerHTML to a
times symbol.
It then appends the span element to the button element.
It then appends the button element to the div element.
It then appends the div element to the alert div.
## Authors

- [@Nick390](https://www.github.com/nick390)

