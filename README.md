Hello, I have created a very simple tooltip library with Javascript. It is extremely easy to use and only 3kb in size. I hope it will be useful for you.

To include the file in your project:

You can add jsTip just above the body tag.

```
<script src="jstip.js"></script>
<script>
    jsTip("[data-tooltip]"); // Here, you can use any id or class instead of [data-tooltip]
</script>
```

After completing this step, you can use the tooltip on any element you want.

#### Parameters:

```
data-tooltip = "The text you write here will appear in the tooltip."
data-tooltip-position = "top, top start, top end, left, left start, left end, right, right start, right end, bottom, bottom start, bottom end" // You can use any of these values.
data-tooltip-background-color = "You can enter the background color here. Default is black."
data-tooltip-text-color = "You can enter the text color here. Default is white."
```

You can check out the demo for more examples.

That's all there is to it.

I hope it will be helpful for you :)
