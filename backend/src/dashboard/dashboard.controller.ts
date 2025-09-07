import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('api/dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('metrics')
  getMetrics() {
    return this.dashboardService.getMetrics();
  }

  @Get('revenue')
  getRevenue() {
    return this.dashboardService.getRevenue();
  }

  @Get('customer-satisfaction')
  getCustomerSatisfaction() {
    return this.dashboardService.getCustomerSatisfaction();
  }

  @Get('visitor-insights')
  getVisitorInsights() {
    return this.dashboardService.getVisitorInsights();
  }

  @Get('top-products')
  getTopProducts() {
    return this.dashboardService.getTopProducts();
  }
}
