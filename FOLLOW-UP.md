# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?
- vue2-google-maps : for the implement google map in the project
- vuejs-loading-plugin : for loading page animation
- bootstrap : for css lib
- axios : for call api
### Q) What's the command to start the application locally?
`yarn dev`

---

# General:

### Q) If you had more time, what further improvements or new features would you add?
I want to do features that allow a user to know the nearest hub (map markers) by ordering them from nearest to furthest in the list. But it takes too much time
### Q) Which parts are you most proud of? And why?
i proud of project because all part work together to make this page
### Q) Which parts did you spend the most time with? What did you find most difficult?
The part spent time for me is set up google map API with a google account to make gmap API key work with many functions. Because I new with this gg cloud service .  
The part most difficult is a custom market like design and have to change icon when select 

### Q) How did you find the test overall? Did you have any issues or have difficulties completing? If you have any suggestions on how we can improve the test, we'd love to hear them.
I have an issue with make markers on google without lat and lng. Google requires coordinates for a marker . I think It should get from data too. But I cannot find it so I must get it by calling Gmap API again .
It makes bad performance for a web page.