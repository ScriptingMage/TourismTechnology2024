# DB Structure

## hiking-trails
- id
- name
- description
- length

## hiking-trails-leg
- id
- hiking-trails-id
- start-point
- end-point
- distance

## overnight-stays (hotel)
- id
- name
- description
- capacity
- lat
- lon

## hiking-trails-overnight-stays
- id
- hiking-trails-id
- overnight-stays-id

## hiking-trails-booking
- id
- hiking-trails-id
- name
- start-date
- end-date
- beds

## hiking-trails-booking-leg
- id
- hiking-trails-booking-id
- overnight-stays-id
- hiking-trails-leg-id