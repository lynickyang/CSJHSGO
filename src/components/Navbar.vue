<script setup >

</script>

<template>
	<!-- <ChildComponent /> -->
	<nav class="navbar navbar-expand-lg bg-success ">
		<div class="container-fluid ">
			<a class="navbar-brand text-light" href="#">小田園</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav  me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<RouterLink class="nav-link  text-light" aria-current="page" to="/about">關於</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink class="nav-link active text-light"  to="/">列表</RouterLink>
					</li>

					<li class="nav-item">
						<RouterLink class="nav-link active text-light"  to="/create">新增</RouterLink>				
					</li>
				</ul>
				<form class="d-flex" role="search">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</div>
	</nav>
</template>