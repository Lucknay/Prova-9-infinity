const atividade = document.querySelector(".nota")
const botao = document.querySelector(".botao")
const resultado = document.querySelector(".resultado")


botao.addEventListener("click", (evento)=>{
    evento.preventDefault()
    const lista = document.createElement("ul")
    const item_lista = document.createElement("li")
    const btn = document.createElement("button")
    
    item_lista.textContent = atividade.value.trim();
    
    if (atividade.value.trim() === ""){
        
        alert('Digite uma atividade!')
        return;
    }
    
    
    lista.append(item_lista, btn)
    resultado.append(lista)
    
    
    btn.addEventListener("click", ()=>{
        
        lista.remove()
        
        
        
        
    });
    btn.className = "btn"
    btn.textContent = "Remover"
    lista.className = "listinha"
    item_lista.className = "item"
    

    atividade.value = ""
    
    
   
    
    
})



