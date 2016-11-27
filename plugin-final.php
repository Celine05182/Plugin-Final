<?php

/**
 * Plugin Name: Plugin Final
 * Description: Add popup for maintenance purpose
 * Author:      Julien Maury
 * Version:     0.1
*/


function my_func_enqueue_script() {
wp_enqueue_script( 'my-js', plugin_dir_url( __FILE__ ).'js/plugin-final.js', array(), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'my_func_enqueue_script' );

function HTML_for_timer($content){
	$html = "<div>	
		<span id='hh'></span> : 
		<span id='mm'></span> : 
		<span id='ss'></span> 
	</div>";
	return $content.$html;
}
add_action( 'the_content', 'HTML_for_timer' );

/*
function change_title($title){
$correction = str_replace("easyPrint","EasyPrint",$content);
return $correction;
}
add_filter('the_content','test_the_content');
?>
*/

function HTML_for_changing_title($content){
	$html = "
		<div>
			<form method='post' action='#'>
				<input name='title' type='text' placeholder='Changer le titre de la page' required/>
				<input type='submit' value='Changer' />
			</form>
		</div>
	";
	return $content.$html;
}
add_action( 'the_content', 'HTML_for_changing_title' );

if(isset($_GET['title'])){
	function change_title($content){
		global $post;
		$correction = str_replace($post->post_title,$_POST['title'],$content);
		return $correction;
		}
	add_filter('the_title','change_title');
}

/*
function test_the_content($content){
$correction = str_replace("easyPrint","EasyPrint",$content);
return $correction;
}
add_filter('the_content','test_the_content');
*/

/*
	function crossdate(){
		single_post_title('Article en cours : ');
	}
	add_action( 'the_content', 'crossdate' );
*/



