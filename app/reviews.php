<!DOCTYPE html>
<html lang="en">
<?php require_once('head.php'); ?>
<body>
	<div class="container wrapper">
		<div class="row justify-content-center">
			<?php require_once('navbar.php'); ?>
		</div>
		<div class="row justify-content-center">
			<div class="container content col-12">
				<div class="row align-items-center justify-content-around">
					<div class="content_header cChange col-12">
						<div class="container portfolio page">
							<div class="row align-items-center justify-content-center">
								<h1>Reviews</h1>
							</div>
						</div>
					</div>
					<div class="content_main col-12">
						<div class="container reviews page">
							<div class="reviews_cantainer  d-flex flex-column align-items-center col-12">
								<div class="submit d-flex">
									<form class="forma" action="logic/action.php" method="get">
										<input class="inputText" type="text" name="myText" maxlength="22">
										<button class="submit" type="submit">Submit</button>
									</form>
								</div>
								<div class="rews">
									<?php 
										$result = $pdo->query('select * from coltext');

										while( $row = $result->fetch(PDO::FETCH_ASSOC) ) {
											echo "<p style='font-size:".$row['fsize']."px''>";
											echo $row['text'];
											echo "</p>";
										}
									?>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row justify-content-center">
			<footer>© 2017 All rights reserved.</footer>
		</div>
	</div>







<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<script src="js/script.js"></script>
</body>
</html>