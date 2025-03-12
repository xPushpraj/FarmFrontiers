---
title: "Blog Post 2"
date: 2021-12-18T11:10:36+08:00
draft: false
language: en
featured_image: ../assets/images/featured/featured-img-placeholder.png
summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, odio nec venenatis lacinia, lacus lectus varius nisi, in tristique mi purus ut libero.
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, odio nec venenatis lacinia, lacus lectus varius nisi, in tristique mi purus ut libero. Vestibulum vel convallis felis. Ut finibus lorem vestibulum lobortis rhoncus.
author: TailBliss
authorimage: ../assets/images/global/author.webp
categories: blog
tags: blog
---
__Advertisement :smile:__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
  resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
  i18n with plurals support and easy syntax.

You will like those projects!

---

### **Solutions to Survey Assignment**

#### **1. Width of the River and Chainage of C**

To determine the width BC of the river:

- Given:
  - Point E is on the perpendicular BE such that angle CEF is a right angle.
  - Chainage of F = 1200 m
  - Chainage of B = 1320 m
  - Distance EB = 90 m

Using trigonometry:

- The length FB can be calculated as:
  
  \[
  FB = FB_{\text{chainage}} - EB = (1320 - 1200) + 90 = 120 \, \text{m}
  \]
  
- Since angle CEF is a right angle, triangle EFC is a right triangle with legs EB and FC.
  
- Using Pythagoras' theorem to find BC:
  
  \[
  BC = \sqrt{EB^2 + EC^2} 
  \]

But since we need more information about the exact position of point C, further details or measurements are required.

**Chainage of C**: To be determined based on additional calculations involving triangle EFC and the given distances.  

---

#### **2. Methods of Chaining with Obstacles**

When obstacles like buildings or rivers prevent direct chaining, alternative methods include:

1. **Ranging by Two Observers (Line Ranging)**: Two observers at either end use a common sighting point to mark intermediate points along the line.
2. **Perpendicular Intersection**: Establishing perpendicular lines from two points and measuring their intersection for accurate alignment.
3. **Optical Square or Theodolite Aiding**: Using precise instruments to lay out lines at right angles.
4. **Electronics and GPS**: Modern techniques involve using electronic devices like GPS, laser rangefinders, or total stations for chaining.

---

#### **3. Construction of Optical Square**

An optical square uses light reflection to create a 90-degree angle between two perpendicular lines:

1. **Alignment**: The device is set up with two adjustable mirrors at 45 degrees.
2. **Sighting**: A horizontal and vertical hair are aligned along the line of sight.
3. **Intersecting Lines**: The crosshairs intersect, creating a precise right angle for laying out survey lines.

---

#### **4. Correct Distance Calculation**

Correcting tape due to temperature and catenary:

- Formula:  
  \[
  L_{\text{corrected}} = \frac{L}{1 + \alpha (T - T_0)} 
  \]

Given:
- \( \alpha = 11 \times 10^{-6} / ^{\circ}\text{C} \)
- \( T = 35^{\circ}\text{C}, T_0 = 25^{\circ}\text{C} \)

Calculation:

\[
L_{\text{corrected}} = \frac{30}{1 + (11 \times 10^{-6})(10)} = \frac{30}{1.00011} \approx 29.997 \, \text{m}
\]

---

#### **5. Line Ranging**

Line ranging involves:

- Two observers holding rods at each end of the line.
- Sighting along the line and marking intermediate points using a common sight to ensure alignment without crossing obstacles.

---

#### **6. Sag Correction in Steel Tape**

Sag correction formula:

\[
C_s = \frac{w^2 L}{8 T^3} 
\]

Given:
- \( w = 77000 \, \text{kN/m}^3 \)
- \( L = 10 \times 30 = 30 \, \text{m (each bay)} \)
- \( T = 80 \, \text{N per bay} \)

Calculate sag for one bay:

\[
C_s = \frac{(77000)^2 \times 10}{8 \times (80)^3} 
\]

Compute for three bays and sum corrections.

---

#### **7. Distance AB**

Using the Law of Cosines in triangles ACB and ADB with given side lengths:

- Given: \( AC = 300 \, \text{m}, CB = 150 \, \text{m}, BD = 175 \, \text{m}, DA = 250 \, \text{m} \)
  
- Apply Law of Cosines in triangle ACD:
  
  \[
  AB^2 = AC^2 + AD^2 - 2 \cdot AC \cdot AD \cdot \cos(\theta)
  \]
  
But without angle θ or more information, cannot calculate directly.  

---

#### **8. Traversing and Plotting**

- **Traversing**: Measure horizontal angles between points using a theodolite.
- **Plotting**: Record distances and angles to create maps with scale drawings.

---

#### **9. Field vs. Office Work**

- **Field Work**: Actual measurement on-site, compensating for obstacles and conditions (e.g., uneven terrain).
- **Office Work**: Data recording, calculation of errors, creating plans.

---

#### **10. True Distance Correction**

Correcting tape due to temperature:

Formula:

\[
L_{\text{true}} = \frac{L}{1 + \alpha (T - T_0)} 
\]

Given:
- \( L = 30 \, \text{m} \)
- \( \alpha = 3 \times 10^{-5} / ^{\circ}\text{C} \)
- \( T = 35^{\circ}\text{C}, T_0 = 25^{\circ}\text{C} \)

Compute:

\[
L_{\text{true}} = \frac{30}{1 + (3 \times 10^{-5})(10)} = \frac{30}{1.00003} \approx 29.997 \, \text{m}
\]

---

#### **11. Width of the River**

Using bearings from point S to G and E:

- Apply trigonometry with given angles (325° and 230°) and distance EF = 30 m.
- Calculate distances using sine or cosine rules.

---

#### **12. Reciprocal Ranging**

Reciprocal ranging involves measurements from both ends of the line towards each other:

- Continue until a common point is reached, ensuring alignment without crossing obstacles.

---

#### **13. True Area Calculation**

Scaling factor due to chain error:

- Given: Chainage was too long by 20 cm (0.2 m) for 220 sq.cm plot.
  
- Area correction:
  
  \[
  A_{\text{true}} = A_{\text{drawn}} \times \left(1 + \frac{\delta L}{L}\right)^2 
  \]

Compute true area based on scale.

---

#### **14. True Distance Correction**

Correcting for chain length error:

- Total chainage measured: 2400 m.
  
- Correction per meter:
  
  \[
  \delta L = \alpha \cdot L_0 \cdot \Delta T
  \]
  
Sum corrections over total distance.

---

#### **15. Offsets and Area Calculation**

Offsets are perpendicular distances from a survey line to features.

- Take using perpendicular rods or theodolites.
- Plot on cross staff layout for accurate area calculation using trapezoidal or Simpson's rule.

---

Each problem requires detailed calculations based on geometric principles, material properties, and error corrections. Ensure all units (meters, kilograms) are consistent for accuracy in each solution.