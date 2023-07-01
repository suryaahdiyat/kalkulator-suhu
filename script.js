const buttons = document.querySelectorAll(".btn");
const pointer = document.querySelector(".pointer")
const buttons2 = document.querySelectorAll(".btn2");
const pointer2 = document.querySelector(".pointer2")
const btn_hitung = document.getElementById("hitung")
pointer.addEventListener("click", () => {
  buttons.forEach((button) => {
    if (!button.classList.contains("active")) {
      button.classList.toggle("ngambang");
    }
  });
});
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const nInput = document.getElementById("nInput")
    nInput.innerHTML = e.target.innerHTML;

    if (!e.target.classList.contains("active")) {
      buttons.forEach((btn) => {
        if (btn.classList.contains("active"))
          btn.classList.remove("active");
        btn.classList.remove("ngambang");
      });
      if (e.target.classList.contains("ngambang"))
        e.target.classList.remove("ngambang");
      e.target.classList.add("active");
    }
  });
})
pointer2.addEventListener("click", (e) => {
  buttons2.forEach((button) => {
    if (!button.classList.contains("active")) {
      button.classList.toggle("ngambang");
    }
  });
});
buttons2.forEach((button) => {
  button.addEventListener("click", (e) => {
    const nOutput = document.getElementById("nOutput")
    nOutput.innerHTML = e.target.innerHTML;
    if (!e.target.classList.contains("active")) {
      buttons2.forEach((btn) => {
        if (btn.classList.contains("active"))
          btn.classList.remove("active");
        btn.classList.remove("ngambang");
      });
      if (e.target.classList.contains("ngambang"))
        e.target.classList.remove("ngambang");
      e.target.classList.add("active");
    }
  });
});

btn_hitung.addEventListener("click", () => {
  const btn1_active = document.querySelector(".btn.active").innerHTML
  const btn2_active = document.querySelector(".btn2.active").innerHTML
  const input = document.getElementById("value").value
  const result = document.getElementById("result")
  const info_title = document.querySelector(".title")
  const info_p = document.querySelector(".info p")
  if (!input) alert("Input Tidak Boleh Kosong")
  result.value = hasil(btn1_active, btn2_active, Number.parseInt(input))
  info_title.innerHTML = cTitle(btn1_active, btn2_active)
  info_p.innerHTML = cP(btn1_active, btn2_active)
})

const hasil = (fChoice, sChoice, input) => {
    if (fChoice == "Celcius") {
        if (sChoice == fChoice) return input
        if(sChoice == "Reaumure") return 4/5 * input
        if(sChoice == "Fahrenheit") return 9/5 * input + 32
        return input + 273
    }
    if(fChoice == "Reaumure"){
        if (sChoice == fChoice) return input
        if(sChoice == "Celcius") return 5/4 * input
        if(sChoice == "Fahrenheit") return 9/4 * input + 32
        return 5/4 * input + 273
    }
    if(fChoice == "Fahrenheit"){
        if (sChoice == fChoice) return input    
        if(sChoice == "Celcius") return 5/9 * (input - 32)
        if(sChoice == "Reaumure") return 4/9 * (input - 32)
        return 5/9 * (input - 32) + 273
    }
    if(fChoice == "Kelvin"){
        if (sChoice == fChoice) return input    
        if(sChoice == "Celcius") return input - 273
        if(sChoice == "Reaumure") return 4/5 (input - 273)
        return 9/5 * (input - 273) + 32
    }
}
const cP = (fChoice, sChoice) => {
    if (fChoice == "Celcius") {
        if (sChoice == fChoice) return ""
        if(sChoice == "Reaumure") return "Re = 4/5 C"
        if(sChoice == "Fahrenheit") return "F = 9/5 C + 32"
        return "K = C + 273"
    }
    if(fChoice == "Reaumure"){
        if (sChoice == fChoice) return ""
        if(sChoice == "Celcius") return "C = 5/4 Re"
        if(sChoice == "Fahrenheit") return "F = 9/4 Re + 32"
        return "K = 5/4 Re + 273"
    }
    if(fChoice == "Fahrenheit"){
        if (sChoice == fChoice) return "" 
        if(sChoice == "Celcius") return "C = 5/9 (F - 32)"
        if(sChoice == "Reaumure") return "Re = 4/9 (F - 32)"
        return "K = 5/9 (F - 32) + 273"
    }
    if(fChoice == "Kelvin"){
        if (sChoice == fChoice) return ""   
        if(sChoice == "Celcius") return "C = K - 273"
        if(sChoice == "Reaumure") return "Re = 4/5 (K - 273)"
        return "F = 9/5 (K - 273) + 32"
    }
}
const cTitle = (fChoice, sChoice) => {
    if (fChoice == "Celcius") {
        if (sChoice == fChoice) return "Celcius -&gt; Celcius"
        if(sChoice == "Reaumure") return "Celcius -&gt; Reaumure"
        if(sChoice == "Fahrenheit") return "Celcius -&gt; Fahrenheit"
        return "Celcius -&gt; Kelvin"
    }
    if(fChoice == "Reaumure"){
        if (sChoice == fChoice) return "Reaumure -&gt; Reaumure"
        if(sChoice == "Celcius") return "Reaumure -&gt; Celcius"
        if(sChoice == "Fahrenheit") return "Reaumure -&gt; Fahrenheit"
        return "Reaumure -&gt; Kelvin"
    }
    if(fChoice == "Fahrenheit"){
        if (sChoice == fChoice) return "Fahrenheit -&gt; Fahrenheit" 
        if(sChoice == "Celcius") return "Fahrenheit -&gt; Celcius"
        if(sChoice == "Reaumure") return "Fahrenheit -&gt; Reaumure"
        return "Fahrenheit -&gt; Kelvin"
    }
    if(fChoice == "Kelvin"){
        if (sChoice == fChoice) return "Kelvin -&gt; Kelvin"   
        if(sChoice == "Celcius") return "Kelvin -&gt; Celcius"
        if(sChoice == "Reaumure") return "Kelvin -&gt; Reaumure"
        return "Kelvin -&gt; Fahrenheit"
    }
}