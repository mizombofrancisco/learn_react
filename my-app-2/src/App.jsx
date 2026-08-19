import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div className='login-panel'>
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjx0aXRsZSB4bWxucz0iIj51c2VyPC90aXRsZT48cGF0aCBmaWxsPSIjZjUwMGZmIiBkPSJNMTIgNGE0IDQgMCAwIDEgNCA0YTQgNCAwIDAgMS00IDRhNCA0IDAgMCAxLTQtNGE0IDQgMCAwIDEgNC00bTAgMTBjNC40MiAwIDggMS43OSA4IDR2Mkg0di0yYzAtMi4yMSAzLjU4LTQgOC00Ii8+PC9zdmc+" alt="user" width="64" height="64" />
           <input className='text-field' type='text' placeholder='Insert name'/>
           <input className='password-field' type='password' placeholder='Insert password'/>
           <button type='submit' onClick=''>ENTRAR</button>
        </div>
      </section>
      <div className="ticks"></div>
    </>
  )
}

export default App
