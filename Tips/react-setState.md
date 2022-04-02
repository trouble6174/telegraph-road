**count will not increment by 2, because setState run asynchronously**
> detail explain: https://stackoverflow.com/questions/36085726/why-is-setstate-in-reactjs-async-instead-of-sync

```js
class Comp {
    changeCount(amount) {
        this.setState({count: this.state.count + amount})
        this.setState({count: this.state.count + amount})
    }
}
```

**this works**

```js
class Comp {
    changeCount(amount) {
        this.setState(prevState => {
            return {count: prevState.count + amount}
        })
        this.setState(prevState => {
            return {count: prevState.count + amount}
        })
    }
}
```

**callback also work, but definitely not good**

```js
this.setState({count: this.state.count + amount},
    () => {
        this.setState({count: this.state.count + amount})
    }
)
```