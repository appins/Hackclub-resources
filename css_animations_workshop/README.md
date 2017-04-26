# CSS3 Animations Workshop

**If you create a website with a strobe light and want to show others
please make sure they don't have epilepsy first**

Recently, you have worked with CSS to do many things in your website. It can
arrange text, change colors, align text, and many other visual things. One
of the things it can also do is change properties over time.

We will be adding an animation to change a few things. first, navigate to your
old site from the personal website workshop in Cloud9. You should now open up
your CSS file inside of that.

> Gif here

After you have your CSS file open, add this code to it to create an animation.
Please consider not copy pasting it, as learning how to do it without looking
it up will be helpful.

```css
@keyframes blue_to_red {
    from{color: blue;}
    to{color: red;}
}
```

This defines a function that switches the text color from blue to red. This
animation isn't being used on anything right now, so we should add an element
to affect. Let's just try it out on all `<p>` elements.

Add this code to your css file to change all `<p>` elements to have this
animation.

```css
p{
  animation-name: blue_to_red;
  animation-duration: 1s;
}
```

> Gif here

Great now we have an animation that turns all text on a web page from blue to
red. Unfortunately, it doesn't stay that way, so lets fix that.

```css
p{
  animation-name: blue_to_red;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
```

> Gif here

Alright, so we have an animation. What if we want it to play over an over?
Simple, just add:

```css
p{
  animation-name: blue_to_red;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
/* Notice that you don't need animation-fill-mode anymore */
```

> Gif here

Well, now the animation goes from blue to red but instantly switches back.
So lets define some more complex animations. To fix this issue, try editing
the animation to this:

```css
@keyframes blue_to_red {
    0%{color: blue;}
    50%{color: red;}
    100%{color: blue;}
}
```

> Gif here

Now the animation will go from red to blue to red (to blue to red and so on...).
You can adjust the percent signs to be very close together or to define really
complex animations.

Some other properties that can be played with include `animation-delay` and
`animation-direction`. By playing around with these you can create many
different visual effects.

If you need some more ideas, visit the
[W3 CSS3 animations tutorial](http://bit.ly/2nxtxRN).

Some possible ideas would be
  * Rotating text.
  * Changing margins to positive and negative values (moves elements around).
  * Doing several things at once (by putting several things in `{}`).
  * Change the background color of certain objects.
  * Use something like `p:hover {...}` to animate an element on mouse hover.
  * Play a sound and make the animation match the sound or song that is being
  played.
  * Build something flashy and bright. Make horribly unusable website.

Want to do something more advanced? Check out some of
[these](http://bit.ly/2p2RfsN).


Done or found a good stopping place? Now would be a great time to contribute
your code. To do this, go to the terminal section in Cloud9 and type this in:

```sh
  git add --all
  git commit -m"Added animations"
  git push
```
