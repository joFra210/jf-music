<?php

namespace App\Controller;



use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/yo", name="yo")
     * @return Response
     * @throws \Exception
     */
    public function start(): Response
    {
        $number = random_int(0, 60);

        return $this->render('home/home.html.twig', [
            'number' => $number,
        ]);
    }
}
