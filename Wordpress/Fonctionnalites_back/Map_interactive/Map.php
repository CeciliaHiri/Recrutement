<?php

register_sidebar([
    'id' => 'interactive_map',
    'name' => 'Map Interactive',
    'before_widget' => '<div id="mapid">',
    'after_widget' => '</div>'
]);

class Map extends WP_Widget
{
  public function __construct()
  {
    parent::__construct('interactive_map', 'Interactive Map');
  }

  public function widget($args, $instance)
  {
    $latitude = $instance['latitude'];
    $longitude = $instance['longitude'];
    echo $args['before_widget'];
    echo "<script type='text/javascript' defer>
let marker10 = L.marker([<?php echo $latitude. ',' .$longitude; ?>]).addTo(mymap);
</script>";
    echo $args['after_widget'];
  }
  public function form($instance)
  {
    $title = $instance['title'] ?? '';
    $latitude = $instance['latitude'] ?? '';
    $longitude = $instance['longitude'] ?? '';
    ?>
    <p>
      <label for="<?= $this->get_field_id('title') ?>">Titre</label>
      <input class="widefat"
             type="text"
             name="<?= $this->get_field_name('title') ?>"
             id="<?= $this->get_field_id('title') ?>"
             value="<?= esc_attr($title) ?>"
      >
    </p>
    <p>
      <label for="<?= $this->get_field_id('latitude') ?>">Latitude du nouveau marqueur</label>
      <input
          type="text"
          name="<?= $this->get_field_name('latitude') ?>"
          id="<?= $this->get_field_id('latitude') ?>"
          value="<?= esc_attr($latitude) ?>"
      >
    </p>
    <p>
      <label for="<?= $this->get_field_id('longitude') ?>">Longitude du nouveau marqueur</label>
      <input
          type="text"
          name="<?= $this->get_field_name('longitude') ?>"
          id="<?= $this->get_field_id('longitude') ?>"
          value="<?= esc_attr($longitude) ?>"
      >
    </p>
    <?php
  }

  public function update($new_instance, $old_instance)
  {
    $instance = $old_instance;
    $instance['title'] = stripslashes(wp_filter_post_kses($new_instance['title']));
    $instance['latitude'] = $new_instance['latitude'];
    $instance['longitude'] = $new_instance['longitude'];
    return $instance;
  }
}

function get_scripts()
{
  wp_register_script('leaflet_script', 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js', false, 1.0, true);
  wp_register_script('interactive_map', get_template_directory_uri() . '/js/map.js', ['leaflet_script'], 1.0, true);
  wp_enqueue_script('interactive_map');
}

function register_css()
{
  wp_register_style('leaflet_style', 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css');
  wp_register_style('map', get_template_directory_uri() . '/css/map.css', ['leaflet_style']);
  wp_enqueue_style('map');
}


add_action("wp_enqueue_scripts", "get_scripts");
add_action("wp_enqueue_scripts", "register_css");

