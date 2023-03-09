``` javascript
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

await sleep(1000)
```