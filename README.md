## React bootstrap component
> Why do we overhead client side rendering by loading unnecessary jquery if we
are not going to use it anywhere else in our project.

### Layouts
--------------------------------------------------------------------
```
<Container>
    The Great Container
</Container>
```
Which renders
```
<div className="container">
    The Great Container
</div>
```

```
<Container isFluid>
    The fluid container
</Container>
```
looks like
```
<div className="container-fluid">
    The Great Container
</div>
```

### Alert
---------------------------------------------
```
<Alert hasSuccess>
    Fantastic alert ever.
</Alert>
```
also applicable,

    * hasSuccess
    * hasDanger
    * hasWarning
    * hasInfo
    * hasPrimary
