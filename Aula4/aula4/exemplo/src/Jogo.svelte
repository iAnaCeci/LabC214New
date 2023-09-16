<script>
  import Jogador from "./Jogador.svelte";
  import { format } from 'date-fns';

  let dataDoGol = new Date();

  function marcaGol() {
    console.log("Marcou 1 Gol");
    dataDoGol = new Date(); // Atualiza a data do gol para a data atual
  }
</script>

<main>
  <h1>Exibe a informação quando marca Gol</h1>
  <Jogador acao={marcaGol} />

  {#if dataDoGol}
    <p>Data do Gol: {format(dataDoGol, 'dd/MM/yyyy HH:mm:ss')}</p>
  {/if}
</main>
