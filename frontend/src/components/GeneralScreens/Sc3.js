import React from 'react';
import './Sc3.css'
import styled from 'styled-components';
import $ from 'jquery'

export default function Sc3() {
    $(document).ready(function(){
        $("#testimonial-slider").owlCarousel({
            items:1,
            itemsDesktop:[1000,1],
            itemsDesktopSmall:[979,1],
            itemsTablet:[768,1],
            pagination:true,
            navigation:true,
            navigationText:["",""],
            slideSpeed:1000,
            autoPlay:true
        });
    });
  return (
    <Styles>
<figure class="snip1533">
  <figcaption>
    <blockquote>
      <p>If you do the job badly enough, sometimes you don't get asked to do it again.</p>
    </blockquote>
    <h3>Wisteria Ravenclaw</h3>
    <h4>Google Inc.</h4>
  </figcaption>
</figure>
<figure class="snip1533">
  <figcaption>
    <blockquote>
      <p>I'm killing time while I wait for life to shower me with meaning and happiness.</p>
    </blockquote>
    <h3>Ursula Gurnmeister</h3>
    <h4>Facebook</h4>
  </figcaption>
</figure>
<figure class="snip1533">
  <figcaption>
    <blockquote>
      <p>The only skills I have the patience to learn are those that have no real application in life. </p>
    </blockquote>
    <h3>Ingredia Nutrisha</h3>
    <h4>Twitter</h4>
  </figcaption>
</figure>
    </Styles>
  )
}

const Styles = styled.div``;