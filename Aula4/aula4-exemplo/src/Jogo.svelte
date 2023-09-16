<script>
	import Jogador from "./Jogador.svelte";

	function marcaGol(){
		console.log("Marcou 1 Gol" );
	}

</script>

<main>

	<h1> Exibe a informação quando marca Gol </h1>
	<Jogador acao = {marcaGol} />


</main>