# DB Structure

## hiking_trails
- id
- name
- description
- length

## hiking_trail_stages
- id
- position
- hiking_trail_id
- title
- distance

## accommodations
- id
- name
- description
- capacity
- lat
- lon

## hiking_trail_stage_accommodations
- id
- hiking_trail_stage_id
- accomodation_id

## bookings
- id
- hiking_trail_id
- name
- start_date
- hikers

## booking_stages
- id
- start_date
- end_date
- hiking_trail_booking_id
- accommodation_id
- hiking_trail_stage_id