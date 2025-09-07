import { DataSource } from 'typeorm';
import { Metric } from '../dashboard/entities/metric.entity';
import { Revenue } from '../dashboard/entities/revenue.entity';
import { VisitorInsights } from '../dashboard/entities/visitor-insights.entity';
import { TargetReality } from '../dashboard/entities/target-reality.entity';
import { VolumeService } from '../dashboard/entities/volume-service.entity';
import { TopProduct } from '../dashboard/entities/top-product.entity';

(async () => {
  const dataSource = new DataSource({
    type: 'sqlite',
    database: 'database.sqlite',
    entities: [
      Metric,
      Revenue,
      VisitorInsights,
      TargetReality,
      VolumeService,
      TopProduct,
    ],
    synchronize: true,
  });

  await dataSource.initialize();

  const metricRepo = dataSource.getRepository('Metric');
  const revenueRepo = dataSource.getRepository('Revenue');
  const visitorInsightsRepo = dataSource.getRepository('VisitorInsights');
  const targetRealityRepo = dataSource.getRepository('TargetReality');
  const volumeServiceRepo = dataSource.getRepository('VolumeService');
  const topProductRepo = dataSource.getRepository('TopProduct');

  await metricRepo.save([
    {
      sales: 1000,
      salesChange: '+8%',
      totalOrders: 300,
      ordersChange: '+5%',
      productsSold: 5,
      productsChange: '+1.2%',
      newCustomers: 8,
      customersChange: '+0.5%',
    },
  ]);

  await revenueRepo.save([
    { day: 'Monday', onlineSales: 14000, offlineSales: 13000 },
    { day: 'Tuesday', onlineSales: 18000, offlineSales: 12000 },
    { day: 'Wednesday', onlineSales: 6000, offlineSales: 22000 },
    { day: 'Thursday', onlineSales: 16000, offlineSales: 6000 },
    { day: 'Friday', onlineSales: 12000, offlineSales: 11000 },
    { day: 'Saturday', onlineSales: 16000, offlineSales: 13000 },
    { day: 'Sunday', onlineSales: 21000, offlineSales: 11000 },
  ]);

  await visitorInsightsRepo.save([
    {
      month: 'Jan',
      loyalCustomers: 200,
      newCustomers: 300,
      uniqueCustomers: 250,
    },
    {
      month: 'Feb',
      loyalCustomers: 220,
      newCustomers: 280,
      uniqueCustomers: 270,
    },
    {
      month: 'Mar',
      loyalCustomers: 240,
      newCustomers: 320,
      uniqueCustomers: 290,
    },
    {
      month: 'Apr',
      loyalCustomers: 260,
      newCustomers: 340,
      uniqueCustomers: 310,
    },
    {
      month: 'May',
      loyalCustomers: 280,
      newCustomers: 360,
      uniqueCustomers: 330,
    },
    {
      month: 'Jun',
      loyalCustomers: 300,
      newCustomers: 380,
      uniqueCustomers: 350,
    },
  ]);

  await targetRealityRepo.save([
    { period: 'Q1', target: 50000, reality: 45000, percentage: 90 },
    { period: 'Q2', target: 55000, reality: 52000, percentage: 95 },
    { period: 'Q3', target: 60000, reality: 58000, percentage: 97 },
    { period: 'Q4', target: 65000, reality: 63000, percentage: 97 },
  ]);

  await volumeServiceRepo.save([
    {
      serviceName: 'Customer Support',
      volume: 150,
      satisfactionRate: 85,
      month: '2024-01',
    },
    {
      serviceName: 'Technical Support',
      volume: 120,
      satisfactionRate: 90,
      month: '2024-01',
    },
    {
      serviceName: 'Sales Support',
      volume: 200,
      satisfactionRate: 88,
      month: '2024-01',
    },
    {
      serviceName: 'Customer Support',
      volume: 160,
      satisfactionRate: 87,
      month: '2024-02',
    },
    {
      serviceName: 'Technical Support',
      volume: 130,
      satisfactionRate: 92,
      month: '2024-02',
    },
    {
      serviceName: 'Sales Support',
      volume: 210,
      satisfactionRate: 90,
      month: '2024-02',
    },
  ]);

  await topProductRepo.save([
    { name: 'Home Decor Range' },
    { name: 'Kitchen Appliances' },
    { name: 'Electronics Bundle' },
    { name: 'Fashion Collection' },
    { name: 'Sports Equipment' },
  ]);

  await dataSource.destroy();
})().catch(console.error);
