Default

```jsx
<Flex alignItems="center " justifyContent="space-between">
  <Button onClick={() => {}}>Button</Button>
  <Button disabled onClick={() => {}}>
    Button
  </Button>

  <Button wide onClick={() => {}}>
    Button
  </Button>
  <Button wide disabled onClick={() => {}}>
    Button
  </Button>
</Flex>
```

Outline Variant

```jsx
<Flex alignItems="center " justifyContent="space-between">
  <Button variant="outline" onClick={() => {}}>
    Button
  </Button>
  <Button variant="outline" disabled onClick={() => {}}>
    Button
  </Button>

  <Button wide variant="outline" onClick={() => {}}>
    Button
  </Button>
  <Button wide variant="outline" disabled onClick={() => {}}>
    Button
  </Button>
</Flex>
```

Commit Variant

```jsx
<Flex alignItems="center " justifyContent="space-between">
  <Button variant="commit" onClick={() => {}}>
    Button
  </Button>
  <Button variant="commit" disabled onClick={() => {}}>
    Button
  </Button>
  <Button wide variant="commit" onClick={() => {}}>
    Button
  </Button>
  <Button wide variant="commit" disabled onClick={() => {}}>
    Button
  </Button>
</Flex>
```

Button as Link

```jsx
<Button href="#">Link Button</Button>
<Button disabled href="#">Link Button</Button>
```

Button with svg

```jsx
<Button href="#">
  <svg viewBox="0 0 36 36" width="14"><g fill="currentColor"><path d="M21.5 12.4l-9.3 8.7c-.6.6-.6 1.5-.1 2.1.3.3.7.5 1.1.5.4 0 .7-.1 1-.4l9.3-8.7c.6-.6.6-1.5.1-2.1-.5-.6-1.5-.7-2.1-.1"></path><path d="M33.1 3.2c-3.7-3.7-9.9-3.6-13.8.1l-5.1 5.1c-.6.6-.6 1.5 0 2.1.6.6 1.5.6 2.1 0l5.1-5.1c2.7-2.6 7-2.7 9.6-.2 1.2 1.2 1.8 2.8 1.8 4.5 0 1.8-.7 3.5-1.9 4.6l-5.7 5.3c-.6.6-.6 1.5-.1 2.1.3.3.7.5 1.1.5.4 0 .7-.1 1-.4l5.7-5.3c1.8-1.7 2.9-4.2 2.9-6.8 0-2.3-1-4.8-2.7-6.5M19.7 25.1l-5.1 5.1c-2.7 2.6-7 2.7-9.6.2-1.2-1.2-1.8-2.8-1.8-4.5 0-1.8.7-3.5 1.9-4.6l5.7-5.3c.6-.6.6-1.5.1-2.1-.6-.6-1.5-.6-2.1-.1L3.1 19C1.3 20.7.2 23.2.2 25.8c0 2.6.9 5 2.7 6.7 1.8 1.8 4.3 2.7 6.7 2.7 2.5 0 5.1-1 7.1-2.8l5.1-5.1c.6-.6.6-1.5 0-2.1s-1.5-.7-2.1-.1"></path></g></svg>
   Link Button
</Button>

<Button disabled href="#">
  <svg viewBox="0 0 36 36" width="14"><g fill="currentColor"><path d="M21.5 12.4l-9.3 8.7c-.6.6-.6 1.5-.1 2.1.3.3.7.5 1.1.5.4 0 .7-.1 1-.4l9.3-8.7c.6-.6.6-1.5.1-2.1-.5-.6-1.5-.7-2.1-.1"></path><path d="M33.1 3.2c-3.7-3.7-9.9-3.6-13.8.1l-5.1 5.1c-.6.6-.6 1.5 0 2.1.6.6 1.5.6 2.1 0l5.1-5.1c2.7-2.6 7-2.7 9.6-.2 1.2 1.2 1.8 2.8 1.8 4.5 0 1.8-.7 3.5-1.9 4.6l-5.7 5.3c-.6.6-.6 1.5-.1 2.1.3.3.7.5 1.1.5.4 0 .7-.1 1-.4l5.7-5.3c1.8-1.7 2.9-4.2 2.9-6.8 0-2.3-1-4.8-2.7-6.5M19.7 25.1l-5.1 5.1c-2.7 2.6-7 2.7-9.6.2-1.2-1.2-1.8-2.8-1.8-4.5 0-1.8.7-3.5 1.9-4.6l5.7-5.3c.6-.6.6-1.5.1-2.1-.6-.6-1.5-.6-2.1-.1L3.1 19C1.3 20.7.2 23.2.2 25.8c0 2.6.9 5 2.7 6.7 1.8 1.8 4.3 2.7 6.7 2.7 2.5 0 5.1-1 7.1-2.8l5.1-5.1c.6-.6.6-1.5 0-2.1s-1.5-.7-2.1-.1"></path></g></svg>
   Link Button
</Button>
```
