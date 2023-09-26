console.log("Hello World")
console.log("ANSARI USMAN")
console.log("Start")

ext.runtime.onEnable.addListener(() => {
    console.log('Extension Enabled')
})

ext.runtime.onExtensionClick.addListener(() => {
    console.log('Extention Clicked')
})