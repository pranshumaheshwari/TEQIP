var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TEQIP' });
});

 router.get('/commitee', function(req,res){
   res.render('commitee',{title:'Commitee--TEQIP'});
 });

 router.get('/quality-circle', function(req,res){
   res.render('quality_circle',{title: 'Quality Circle--TEQIP'});
 });

 router.get('/reports', function(req,res){
   res.render('reports',{title: 'Reports--TEQIP'});
 });

 router.get('/events', function(req,res){
   res.render('events',{title: 'Events--TEQIP'});
 });

 router.get('/staff', function(req,res){
   res.render('staff',{title: 'Staff--TEQIP'});
 });

 router.get('/contact', function(req,res){
   res.render('contact',{title: 'Contact--TEQIP'});
 });

 router.get('/image-gallery', function(req,res){
   res.render('image_gallery',{title: 'Gallery--TEQIP'});
 });

 router.get('/video-gallery', function(req,res){
   res.render('video_gallery',{title: 'Gallery--TEQIP'});
 });

router.get('/activity-list', function(req,res){
  res.render('activity_list',{title: 'Activity List--TEQIP'});
});

router.get('/useful-links', function(req,res){
   res.render('useful-links',{title: 'Useful Links--TEQIP'})
 });

router.get('/experts-iit_indore', function(req,res){
  res.render('experts-iit_indore', {title: 'Experts--TEQIP'})
});

module.exports = router;
