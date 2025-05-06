import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'All 30 Steps: Vaseline & Vitamin E Oil Routine - SkincareEdu',
  description: 'Detailed guide for all 30 steps of the science-backed Vaseline and vitamin E oil skincare routine',
};

export default function AllStepsPage() {
  // Array of all 30 steps
  const allSteps = [
    {
      number: 1,
      title: "Skin State Assessment",
      description: "Check your face skin condition to identify your skin type (dry, oily, combination, or sensitive).",
      details: `Before starting any skincare routine, it's essential to understand your skin type. This will 
      help you adjust the routine to maximize benefits and minimize potential side effects.
      
      How to assess your skin:
      1. Wash your face with a gentle cleanser and pat dry.
      2. Wait 30 minutes without applying any products.
      3. Examine your T-zone (forehead, nose, and chin) and cheeks.
      4. Dry skin: Feels tight, may have flaky patches.
      5. Oily skin: Appears shiny, especially in the T-zone.
      6. Combination skin: Oily T-zone but normal or dry cheeks.
      7. Sensitive skin: Easily reddens, itches, or burns with products.
      
      Note: If you have oily skin, use a smaller amount of the Vaseline mixture and focus mainly on areas with fine lines. For very oily skin, consider using this treatment only 2-3 times per week instead of daily.`
    },
    {
      number: 2,
      title: "Patch Test",
      description: "Apply a small amount of Vaseline and vitamin E oil mixture on your inner wrist to check for allergic reactions over 24 hours.",
      details: `Safety first! Before applying the Vaseline and vitamin E oil mixture to your face, it's crucial to ensure you don't have any allergic reactions:

      1. Mix a small amount of Vaseline (pea-sized) with 1 drop of vitamin E oil.
      2. Apply this mixture to your inner wrist or behind your ear.
      3. Leave it on for 24 hours without washing the area.
      4. Check for any signs of irritation: redness, itching, burning, or swelling.
      5. If you experience any adverse reaction, do not proceed with the routine.
      6. If no reaction occurs, it's likely safe to use on your face.
      
      This step is especially important for those with sensitive skin or a history of allergic reactions to skincare products.`
    },
    {
      number: 3,
      title: "Cleansing",
      description: "Wash your face with a mild cleanser to remove dirt, oil, and makeup before applying the mixture.",
      details: `Proper cleansing is the foundation of any effective skincare routine. It removes impurities that can interfere with the absorption and effectiveness of subsequent products:

      1. Use lukewarm water (hot water can strip natural oils).
      2. Apply a gentle, pH-balanced cleanser appropriate for your skin type.
      3. Massage in circular motions for 30-60 seconds.
      4. Pay special attention to areas with makeup or sunscreen.
      5. Rinse thoroughly, ensuring no cleanser residue remains.
      6. Pat (don't rub) your face dry with a clean towel.
      
      Choose a sulfate-free cleanser that won't disrupt your skin's natural barrier. For dry or sensitive skin, cream or oil cleansers work best. For oily skin, gel or foam cleansers are more appropriate.`
    },
    {
      number: 4,
      title: "Facial Steaming",
      description: "Use warm steam to open pores before applying the Vaseline mixture for better absorption.",
      details: `Steaming helps open your pores, allowing for deeper penetration of the Vaseline and vitamin E oil mixture:

      1. Boil water and pour it into a bowl.
      2. Position your face about 8-10 inches above the bowl.
      3. Drape a towel over your head to trap the steam.
      4. Steam your face for 5-10 minutes (no longer to avoid irritation).
      5. Avoid this step if you have rosacea or extremely sensitive skin.
      
      The steam softens the outer layer of your skin, making it more receptive to treatments. This step enhances the effectiveness of the Vaseline routine by allowing better penetration of the vitamin E oil component.`
    },
    {
      number: 5,
      title: "Gentle Exfoliation",
      description: "Remove dead skin cells to allow better absorption of the moisturizing mixture.",
      details: `Exfoliation removes dead skin cells that can block the penetration of moisturizing ingredients:

      1. Choose a gentle chemical exfoliant with AHAs (glycolic or lactic acid) or BHAs (salicylic acid).
      2. Apply a small amount to clean, dry skin.
      3. Gently massage in circular motions for 30-60 seconds.
      4. Avoid the eye area and any active breakouts or irritated areas.
      5. Rinse thoroughly with lukewarm water.
      
      Limit exfoliation to 1-2 times per week, as over-exfoliation can damage your skin barrier. If you have sensitive skin, use a very mild exfoliant or skip this step entirely.`
    },
    {
      number: 6,
      title: "Preparation of Vaseline & Vitamin E Mixture",
      description: "Create the perfect blend of Vaseline and vitamin E oil for maximum benefits.",
      details: `Creating the right mixture is crucial for achieving optimal results:

      1. In a small, clean container, place 1 tablespoon of Vaseline.
      2. Add 3-5 drops of vitamin E oil (or pierce 2 vitamin E capsules and squeeze out the contents).
      3. Mix thoroughly with a clean spatula until well blended.
      4. The mixture should be uniform in consistency.
      5. Store any unused portion in an airtight container.
      
      This mixture has a 4-week shelf life if stored properly. For oily skin, reduce the amount of Vaseline and increase vitamin E slightly. For dry skin, you can add 1-2 drops of jojoba or rosehip oil for enhanced moisture.`
    },
    {
      number: 7,
      title: "Applying Toner",
      description: "Use an alcohol-free toner to balance skin pH before the Vaseline treatment.",
      details: `A good toner restores your skin's pH balance after cleansing and adds a light layer of hydration:

      1. Choose an alcohol-free toner with hydrating ingredients like glycerin or hyaluronic acid.
      2. Apply a few drops to a cotton pad or your palms.
      3. Gently pat the toner over your entire face and neck.
      4. Allow it to absorb completely before moving to the next step.
      
      Toners with witch hazel or rose water are particularly beneficial before the Vaseline routine as they provide astringent and soothing properties without disrupting the skin barrier.`
    },
    {
      number: 8,
      title: "Application of Serum",
      description: "Apply a hydrating serum containing hyaluronic acid to boost moisture levels.",
      details: `Serums deliver concentrated active ingredients deeper into the skin:

      1. Select a serum with hyaluronic acid, niacinamide, or vitamin C.
      2. Apply 2-3 drops to your fingertips.
      3. Gently press and pat the serum into your skin.
      4. Focus on areas of concern (fine lines, uneven texture, etc.).
      5. Allow the serum to fully absorb for 1-2 minutes.
      
      The hyaluronic acid in the serum will draw moisture to the skin, which will then be sealed in by the Vaseline mixture, creating a powerful hydrating effect.`
    },
    {
      number: 9,
      title: "First Layer of Vaseline Mixture",
      description: "Apply a thin layer of the Vaseline and vitamin E oil mixture to your face using upward strokes.",
      details: `This initial layer provides the foundation of moisture and protection:

      1. Take a pea-sized amount of the mixture on your fingertip.
      2. Dot it on your forehead, cheeks, chin, and nose.
      3. Using your ring finger (which applies the least pressure), gently spread the mixture using upward strokes.
      4. Avoid tugging or pulling on the skin.
      5. Apply very lightly around the eye area, staying away from the lash line.
      
      This thin first layer allows the skin to adapt to the occlusive nature of the product and begins the process of sealing in moisture while delivering vitamin E's antioxidant benefits.`
    },
    {
      number: 10,
      title: "Facial Massage",
      description: "Perform a gentle facial massage to enhance circulation and product absorption.",
      details: `Massage improves circulation and helps the mixture penetrate more effectively:

      1. Use your fingertips to apply gentle pressure in circular motions.
      2. Start at the center of your face and work outward.
      3. Spend extra time on areas with tension (jaw, forehead, between eyebrows).
      4. Use upward strokes along the neck and jawline.
      5. Continue for 3-5 minutes.
      
      This massage helps stimulate lymphatic drainage, reducing puffiness while improving the penetration of the vitamin E component of the mixture. The slippery nature of the Vaseline provides excellent slip for massage without tugging the skin.`
    },
    {
      number: 11,
      title: "Focus on Fine Lines",
      description: "Apply additional mixture to areas with visible fine lines or wrinkles.",
      details: `Targeted application can address specific concerns:

      1. Identify areas with fine lines or wrinkles (crow's feet, forehead lines, nasolabial folds).
      2. Take a tiny amount of the mixture on your ring finger.
      3. Gently tap (don't rub) the mixture onto these areas.
      4. Apply with light pressure in a patting motion.
      5. For deeper wrinkles, apply slightly more product.
      
      These areas require extra attention as they typically show the first signs of aging. The occlusive nature of Vaseline will temporarily plump fine lines by preventing water loss, while vitamin E provides long-term antioxidant protection.`
    },
    {
      number: 12,
      title: "Second Layer Application",
      description: "Apply a second, thinner layer focusing on particularly dry areas.",
      details: `This second layer provides enhanced protection for areas that need extra attention:

      1. Take a smaller amount than used for the first layer.
      2. Focus on particularly dry areas (often cheeks, around the mouth, or forehead).
      3. Avoid the T-zone if you have oily or combination skin.
      4. Pat gently to apply rather than rubbing.
      5. Allow a minute between layers for better adherence.
      
      This layering technique, known as "slugging" in skincare communities, creates a more effective moisture barrier. The second layer is crucial for extremely dry skin but should be minimal or skipped entirely for oily skin types.`
    },
    {
      number: 13,
      title: "Eye Area Treatment",
      description: "Carefully apply a very small amount around the eyes to target crow's feet and undereye wrinkles.",
      details: `The delicate eye area requires special attention:

      1. Use your ring finger to apply a micro-amount of the mixture.
      2. Tap gently along the orbital bone, staying 2-3mm away from the lash line.
      3. Focus on the outer corners where crow's feet appear.
      4. For undereye concerns, apply with an extremely light touch.
      5. Avoid getting the product in your eyes.
      
      The skin around the eyes is the thinnest on the face and benefits greatly from moisture retention. However, using too much product here can cause milia (small white bumps) or irritation if the product migrates into the eyes.`
    },
    {
      number: 14,
      title: "Neck Application",
      description: "Extend the treatment to your neck using upward strokes to prevent sagging.",
      details: `The neck often shows signs of aging quickly due to thinner skin:

      1. Take a small amount of the mixture.
      2. Starting at the base of the neck, use upward strokes to apply.
      3. Continue up to the jawline in sweeping motions.
      4. Be gentle to avoid pulling or tugging on this delicate skin.
      5. Pay special attention to horizontal neck lines if present.
      
      The neck is often neglected in skincare routines but benefits greatly from the same treatments as the face. Consistent application of the Vaseline and vitamin E mixture can help maintain elasticity and prevent the formation of "tech neck" lines.`
    },
    {
      number: 15,
      title: "Lip Treatment",
      description: "Apply a thicker layer to lips to address fine lines around the mouth and prevent chapping.",
      details: `The lips and perioral area benefit greatly from this mixture:

      1. Apply a slightly thicker layer to the lips.
      2. Extend slightly beyond the lip border to catch fine vertical lines.
      3. Press lips together gently to distribute evenly.
      4. For severe dryness, apply an extra layer before bed.
      5. Pay special attention to the corners of the mouth.
      
      Lips lack oil glands and are constantly exposed to the elements, making them particularly susceptible to dryness and aging. The Vaseline component provides immediate relief from chapping, while vitamin E promotes long-term healing.`
    },
    {
      number: 16,
      title: "Pressure Point Stimulation",
      description: "Stimulate facial pressure points to enhance blood circulation and product effectiveness.",
      details: `Acupressure enhances the overall effectiveness of the treatment:

      1. With clean fingertips, apply gentle pressure to key facial points:
         - Between eyebrows (third eye)
         - Temples
         - Under cheekbones
         - Jawline
         - Base of the skull
      2. Hold each point for 5-10 seconds.
      3. Apply firm but comfortable pressure.
      4. Complete the sequence three times.
      
      This technique draws from Traditional Chinese Medicine and helps reduce tension while promoting lymphatic drainage and circulation, enhancing the delivery of nutrients to the skin.`
    },
    {
      number: 17,
      title: "Setting Time",
      description: "Allow the mixture to set on your face for 15-20 minutes before proceeding.",
      details: `This resting period maximizes benefits:

      1. Find a comfortable position where you can relax.
      2. Keep your head slightly elevated to prevent the mixture from migrating.
      3. Avoid touching your face during this time.
      4. Use this time for meditation or deep breathing exercises.
      5. The mixture will begin to feel slightly less slippery as it sets.
      
      During this crucial period, the Vaseline creates an occlusive barrier that prevents transepidermal water loss, while the vitamin E penetrates deeper layers of the epidermis, delivering its antioxidant benefits.`
    },
    {
      number: 18,
      title: "Tissue Blotting (Optional)",
      description: "For those with oilier skin, lightly blot excess product with a clean tissue.",
      details: `Removing excess product can prevent congestion for some skin types:

      1. Take a clean, soft facial tissue.
      2. Gently press (don't wipe) on areas that feel too greasy.
      3. Focus on the T-zone (forehead, nose, chin).
      4. Blot very lightly—the goal is to remove excess, not all product.
      5. This step is primarily for oily or combination skin.
      
      This selective removal ensures you get the benefits of the treatment without overwhelming oilier areas of the face. Even after blotting, enough product remains to provide the desired occlusive effect.`
    },
    {
      number: 19,
      title: "Nighttime Rest",
      description: "For overnight treatment, sleep on your back with an elevated pillow to prevent product transfer.",
      details: `Maximizing overnight benefits requires some adjustments:

      1. Use a satin or silk pillowcase to minimize friction and product transfer.
      2. Elevate your head slightly with an extra pillow.
      3. Try to sleep on your back if possible.
      4. If you're a side sleeper, place a towel over your pillowcase.
      5. Consider using a sleep mask to prevent touching your face during sleep.
      
      Overnight application allows for maximum absorption time and takes advantage of the skin's natural repair cycle, which is most active between 10 PM and 2 AM. During this time, cell turnover and collagen production increase.`
    },
    {
      number: 20,
      title: "Morning Cleansing",
      description: "Gently wash off the treatment in the morning using lukewarm water and a mild cleanser.",
      details: `Proper removal ensures skin is ready for daytime products:

      1. Use lukewarm water to loosen the mixture.
      2. Apply a gentle cleanser with your fingertips.
      3. Massage in circular motions to break down the Vaseline.
      4. Rinse thoroughly, ensuring no residue remains.
      5. Pat dry with a clean towel.
      
      A thorough but gentle morning cleanse removes any remaining product while preserving the hydration and benefits achieved overnight. Your skin should feel soft and plump, not greasy.`
    },
    {
      number: 21,
      title: "Daytime Moisturizer Application",
      description: "Apply a lighter daytime moisturizer appropriate for your skin type.",
      details: `Transitioning to day-appropriate products:

      1. Choose a lighter moisturizer that works well under makeup.
      2. Look for ingredients like hyaluronic acid, ceramides, or glycerin.
      3. Apply a pea-sized amount to the entire face and neck.
      4. Allow to absorb for 3-5 minutes before applying sunscreen or makeup.
      5. For very dry skin, you can mix in a drop of facial oil.
      
      After the intensive overnight treatment, your skin is optimally hydrated. A lighter daytime moisturizer maintains this hydration while providing a suitable base for sunscreen and makeup.`
    },
    {
      number: 22,
      title: "Sunscreen Application",
      description: "Apply a broad-spectrum SPF 30+ sunscreen to protect your skin.",
      details: `Sun protection is essential, especially following this treatment:

      1. Choose a broad-spectrum SPF 30-50 sunscreen.
      2. Apply generously (1/4 teaspoon for face and neck).
      3. Pay special attention to areas prone to sun damage (cheekbones, nose, forehead).
      4. Wait 15 minutes before sun exposure.
      5. Reapply every 2 hours when outdoors.
      
      Vitamin E increases photosensitivity slightly, making sun protection even more critical. The anti-aging benefits of your Vaseline routine can be undone by unprotected sun exposure, which is responsible for up to 90% of visible skin aging.`
    },
    {
      number: 23,
      title: "Weekly Exfoliation",
      description: "Once a week, perform a deeper exfoliation to enhance the effectiveness of the routine.",
      details: `Regular exfoliation enhances overall results:

      1. Choose either a chemical exfoliant (AHA/BHA) or a gentle physical exfoliant.
      2. Apply to clean, dry skin before the Vaseline routine.
      3. For chemical exfoliants, apply and wait per product instructions (usually 10-30 minutes).
      4. For physical exfoliants, massage gently for 30-60 seconds, then rinse thoroughly.
      5. Skip this step if your skin shows any signs of irritation.
      
      Weekly exfoliation removes built-up dead skin cells, allowing subsequent applications of the Vaseline and vitamin E mixture to penetrate more effectively. This significantly enhances results over time.`
    },
    {
      number: 24,
      title: "Hydration Monitoring",
      description: "Track your skin's hydration levels and adjust the amount of product accordingly.",
      details: `Adapting to your skin's changing needs:

      1. Observe your skin's response to the treatment over time.
      2. Look for signs of:
         - Overhydration: puffiness, congestion, or milia formation
         - Underhydration: tight feeling, flakiness, or fine lines appearing
      3. Adjust the amount of mixture up or down accordingly.
      4. Consider environmental factors (humidity, heating, air conditioning).
      5. Hydration needs change with seasons and hormonal cycles.
      
      This observational approach allows you to customize the routine to your skin's specific needs, which may fluctuate throughout the month or with changing environmental conditions.`
    },
    {
      number: 25,
      title: "Diet and Water Intake",
      description: "Complement the external routine with proper nutrition and hydration.",
      details: `Internal support enhances external treatments:

      1. Aim for 8-10 glasses of water daily.
      2. Incorporate foods rich in:
         - Omega-3 fatty acids (salmon, walnuts, flaxseed)
         - Antioxidants (berries, dark leafy greens)
         - Vitamin C (citrus, bell peppers)
         - Vitamin E (nuts, seeds, avocados)
      3. Limit dehydrating substances like alcohol and caffeine.
      4. Consider a hyaluronic acid supplement (consult healthcare provider first).
      
      Topical treatments are significantly more effective when supported by proper internal hydration and nutrition. The skin is the body's largest organ and reflects overall health.`
    },
    {
      number: 26,
      title: "Progress Documentation",
      description: "Take weekly photos to track improvements in skin texture, hydration, and fine lines.",
      details: `Visual documentation helps monitor results:

      1. Take photos in the same lighting, position, and time of day each week.
      2. Capture multiple angles (front, both sides, forehead tilted up).
      3. Avoid using filters or makeup.
      4. Note specific concerns you're tracking (particular wrinkles, dry patches).
      5. Compare monthly to see gradual changes.
      
      Skin improvements from consistent care are often gradual and can be difficult to notice day-to-day. Weekly documentation provides objective evidence of progress and helps maintain motivation.`
    },
    {
      number: 27,
      title: "Skin Barrier Assessment",
      description: "Regularly evaluate your skin's barrier function and adjust the routine if needed.",
      details: `Monitoring skin barrier health ensures optimal results:

      1. Look for signs of a healthy barrier:
         - Skin feels comfortable (not tight or burning)
         - Hydration lasts throughout the day
         - Minimal reaction to environmental stressors
      2. Signs of barrier damage include:
         - Stinging when applying products
         - Increased sensitivity
         - Persistent redness
      3. If barrier damage is suspected, simplify the routine temporarily.
      4. Increase focus on the Vaseline component rather than active ingredients.
      
      The skin barrier is your first line of defense against environmental damage. The Vaseline component of this routine specifically supports barrier function, but overuse of exfoliants or introduction of too many active ingredients can compromise it.`
    },
    {
      number: 28,
      title: "Stress Management",
      description: "Incorporate stress-reduction techniques to maximize skin benefits.",
      details: `Stress management enhances skin health:

      1. Practice techniques that work for you:
         - Deep breathing
         - Meditation
         - Yoga
         - Progressive muscle relaxation
      2. Aim for 10-20 minutes daily.
      3. Perform facial relaxation by consciously releasing tension in jaw, forehead, and eye area.
      4. Consider stress management part of your skincare routine.
      
      Stress triggers cortisol release, which can break down collagen and elastin while increasing inflammation and oil production. Managing stress is as important for skin health as topical treatments.`
    },
    {
      number: 29,
      title: "Adjust for Environmental Factors",
      description: "Modify the routine based on climate, season, and environmental conditions.",
      details: `Environmental adaptation optimizes results:

      1. In dry climates or winter:
         - Increase the amount of mixture used
         - Consider adding 1-2 drops of additional oils (jojoba, squalane)
         - Apply more frequently
      2. In humid climates or summer:
         - Use a thinner layer
         - Focus mainly on drier areas
         - Consider using only every other night
      3. When traveling, adjust based on the new environment.
      4. In polluted areas, double-cleanse before application.
      
      Environmental factors have a major impact on skin hydration and barrier function. Adjusting your routine accordingly ensures consistent results regardless of external conditions.`
    },
    {
      number: 30,
      title: "Consistency and Long-term Commitment",
      description: "Maintain the routine consistently for at least 4 weeks to see optimal results.",
      details: `Commitment ensures maximum benefits:

      1. Follow the full routine nightly for 4 weeks minimum.
      2. After 4 weeks, assess results and decide on maintenance frequency.
      3. Most people benefit from continuing 2-3 times weekly long-term.
      4. Remember that prevention is easier than correction.
      5. Adjust but don't abandon the routine as seasons change.
      
      Skin cell turnover takes approximately 28 days (one month), which is why most skincare routines require at least this long to show significant results. Consistency is the single most important factor in achieving and maintaining skin improvements.`
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-4">
        <Link href="/classes/vaseline-routine" className="text-primary hover:underline">← Back to Routine Overview</Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">The Complete 30-Step Vaseline & Vitamin E Oil Routine</h1>
      
      <p className="mb-6 text-lg">
        Below you'll find the detailed breakdown of all 30 steps in the science-backed 
        Vaseline and vitamin E oil routine. Follow these steps consistently for optimal 
        results and improved skin texture and appearance.
      </p>
      
      <div className="space-y-8 mb-12">
        {allSteps.map((step) => (
          <div key={step.number} className="border rounded-lg overflow-hidden">
            <div className="flex items-center p-4 bg-gray-50">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center mr-4">
                {step.number}
              </div>
              <div>
                <h3 className="font-medium text-lg">{step.title}</h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
            <div className="p-4 border-t">
              <div className="prose max-w-none">
                <p className="whitespace-pre-line">
                  {step.details}
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <div 
                  className="btn btn-primary" 
                  data-step-number={step.number}
                  id={`mark-complete-btn-${step.number}`}
                >
                  Mark as Complete
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-primary text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to transform your skincare routine?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Now that you understand all 30 steps, start your journey to healthier, 
          more radiant skin with our science-backed approach.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/classes/vaseline-routine/track-progress" className="btn bg-white text-primary hover:bg-gray-100">
            Track Your Progress
          </Link>
          <Link href="/community/vaseline-routine" className="btn border border-white text-white hover:bg-primary/80">
            Join Community Discussion
          </Link>
        </div>
      </div>

      <script 
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const buttons = document.querySelectorAll('[id^="mark-complete-btn-"]');
              
              buttons.forEach(button => {
                const stepNumber = button.getAttribute('data-step-number');
                const savedState = localStorage.getItem(\`step-\${stepNumber}-complete\`);
                
                if (savedState === 'true') {
                  button.classList.remove('btn-primary');
                  button.classList.add('bg-green-600', 'hover:bg-green-700', 'text-white');
                  button.textContent = 'Completed ✓';
                }
                
                button.addEventListener('click', function() {
                  const isComplete = button.textContent === 'Completed ✓';
                  const newState = !isComplete;
                  
                  if (newState) {
                    button.classList.remove('btn-primary');
                    button.classList.add('bg-green-600', 'hover:bg-green-700', 'text-white');
                    button.textContent = 'Completed ✓';
                  } else {
                    button.classList.remove('bg-green-600', 'hover:bg-green-700', 'text-white');
                    button.classList.add('btn-primary');
                    button.textContent = 'Mark as Complete';
                  }
                  
                  localStorage.setItem(\`step-\${stepNumber}-complete\`, newState.toString());
                });
              });
            });
          `
        }}
      />
    </div>
  );
} 