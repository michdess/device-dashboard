<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
	return view('home');
});
Route::get('/devices', function () {
  	$url = "https://fullstack-challenge-api.herokuapp.com/devices";
	$handle = curl_init();
	curl_setopt($handle, CURLOPT_URL, $url);
  	curl_setopt($handle, CURLOPT_RETURNTRANSFER, 1);
	$response = curl_exec($handle);
  	if (curl_errno($handle)) {
	    $data =  "Error: " . curl_error($handle);
  	} else {
	    $data = json_decode($response);
	    curl_close($handle);
  	}
	return $data;
});
Route::get('/devices/{id}', function ($id) {
  	$url = "https://fullstack-challenge-api.herokuapp.com/devices/".$id;
	$handle = curl_init();
	curl_setopt($handle, CURLOPT_URL, $url);
  	curl_setopt($handle, CURLOPT_RETURNTRANSFER, 1);
	$response = curl_exec($handle);
  	if (curl_errno($handle)) {
	    $data =  "Error: " . curl_error($handle);
  	} else {
	    $data = json_decode($response);
	    curl_close($handle);
  	}
	return $data;
});
Route::get('/devices/{id}/readings', function ($id) {
  	$url = "https://fullstack-challenge-api.herokuapp.com/devices/".$id.'/readings';
	$handle = curl_init();
	curl_setopt($handle, CURLOPT_URL, $url);
  	curl_setopt($handle, CURLOPT_RETURNTRANSFER, 1);
	$response = curl_exec($handle);
  	if (curl_errno($handle)) {
	    $data =  "Error: " . curl_error($handle);
  	} else {
	    $data = json_decode($response);
	    curl_close($handle);
  	}
	return $data;
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
